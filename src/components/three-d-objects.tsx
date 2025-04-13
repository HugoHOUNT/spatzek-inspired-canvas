"use client"

import { useEffect, useRef } from "react"
import * as THREE from "three"

export function ThreeDObjects() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return

    // Scene setup
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })

    renderer.setSize(window.innerWidth, window.innerHeight)
    containerRef.current.appendChild(renderer.domElement)

    // Mouse position tracking
    const mouse = new THREE.Vector2()
    const mouseInfluenceRadius = 3 // How far the mouse influence reaches
    const mouseForceStrength = 0.05 // Strength of mouse repulsion/attraction
    const friction = 0.98 // Friction to slow down objects
    const maxVelocity = 0.2 // Maximum velocity cap

    // Central zone parameters
    const centralZoneRadius = 4 // Size of the central zone
    const centralAttractionStrength = 0.01 // Strength of attraction to central zone
    const centralRepulsionStrength = 0.005 // Strength of repulsion within central zone
    const minDistanceBetweenObjects = 1.5 // Minimum distance between objects

    // Create objects with physics properties
    const objects: THREE.Mesh[] = []
    const velocities: THREE.Vector3[] = []

    // Create torus objects with colors for light background
    const geometry1 = new THREE.TorusGeometry(2, 0.5, 16, 100)
    const material1 = new THREE.MeshStandardMaterial({
      color: 0x000000, // Black
      roughness: 0.2,
      metalness: 0.8,
    })
    const torus1 = new THREE.Mesh(geometry1, material1)
    torus1.position.x = -3
    torus1.position.y = 1
    torus1.position.z = 0
    scene.add(torus1)
    objects.push(torus1)
    velocities.push(new THREE.Vector3(Math.random() * 0.02 - 0.01, Math.random() * 0.02 - 0.01, 0))

    const geometry2 = new THREE.TorusGeometry(1.5, 0.4, 16, 100)
    const material2 = new THREE.MeshStandardMaterial({
      color: 0xcccccc, // Light Gray
      roughness: 0.1,
      metalness: 0.9,
    })
    const torus2 = new THREE.Mesh(geometry2, material2)
    torus2.position.x = -1
    torus2.position.y = -2
    torus2.position.z = 0
    scene.add(torus2)
    objects.push(torus2)
    velocities.push(new THREE.Vector3(Math.random() * 0.02 - 0.01, Math.random() * 0.02 - 0.01, 0))

    const geometry3 = new THREE.TorusGeometry(1.8, 0.4, 16, 100)
    const material3 = new THREE.MeshStandardMaterial({
      color: 0x000000, // Black
      roughness: 0.2,
      metalness: 0.8,
    })
    const torus3 = new THREE.Mesh(geometry3, material3)
    torus3.position.x = 0
    torus3.position.y = -1
    torus3.position.z = 0
    scene.add(torus3)
    objects.push(torus3)
    velocities.push(new THREE.Vector3(Math.random() * 0.02 - 0.01, Math.random() * 0.02 - 0.01, 0))

    // Create cube objects
    const cubeGeometry = new THREE.BoxGeometry(1, 1, 1)
    const cubeMaterial = new THREE.MeshStandardMaterial({
      color: 0x888888, // Gray
      roughness: 0.2,
      metalness: 0.7,
    })

    const cube1 = new THREE.Mesh(cubeGeometry, cubeMaterial)
    cube1.position.x = 2
    cube1.position.y = 1
    cube1.position.z = 0
    scene.add(cube1)
    objects.push(cube1)
    velocities.push(new THREE.Vector3(Math.random() * 0.02 - 0.01, Math.random() * 0.02 - 0.01, 0))

    const cube2 = new THREE.Mesh(cubeGeometry, cubeMaterial)
    cube2.position.x = 3
    cube2.position.y = 2
    cube2.position.z = 0
    scene.add(cube2)
    objects.push(cube2)
    velocities.push(new THREE.Vector3(Math.random() * 0.02 - 0.01, Math.random() * 0.02 - 0.01, 0))

    // Blue torus
    const blueGeometry = new THREE.TorusGeometry(2, 0.5, 16, 100)
    const blueMaterial = new THREE.MeshStandardMaterial({
      color: 0x0055ff, // Bright Blue
      roughness: 0.1,
      metalness: 0.9,
      emissive: 0x0000aa,
      emissiveIntensity: 0.3,
    })
    const blueTorus = new THREE.Mesh(blueGeometry, blueMaterial)
    blueTorus.position.x = 5
    blueTorus.position.y = 0
    blueTorus.position.z = 0
    scene.add(blueTorus)
    objects.push(blueTorus)
    velocities.push(new THREE.Vector3(Math.random() * 0.02 - 0.01, Math.random() * 0.02 - 0.01, 0))

    // Enhanced lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.7)
    scene.add(ambientLight)

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1.2)
    directionalLight.position.set(5, 5, 5)
    scene.add(directionalLight)

    const pointLight = new THREE.PointLight(0x0055ff, 1.5, 100)
    pointLight.position.set(5, 0, 5)
    scene.add(pointLight)

    // Position camera
    camera.position.z = 10

    // Mouse event handlers
    function onMouseMove(event: MouseEvent) {
      // Calculate mouse position in normalized device coordinates
      mouse.x = (event.clientX / window.innerWidth) * 2 - 1
      mouse.y = -(event.clientY / window.innerHeight) * 2 + 1
    }

    // Convert normalized mouse coordinates to world coordinates
    function getMouseWorldPosition() {
      // Create a vector at the mouse position and the camera's near plane
      const vector = new THREE.Vector3(mouse.x, mouse.y, 0.5)
      vector.unproject(camera)

      // Create a ray from the camera through this point
      const dir = vector.sub(camera.position).normalize()

      // Find where this ray intersects the z=0 plane
      const distance = -camera.position.z / dir.z
      const pos = camera.position.clone().add(dir.multiplyScalar(distance))

      return pos
    }

    // Animation loop with physics
    const animate = () => {
      requestAnimationFrame(animate)

      const mouseWorldPos = getMouseWorldPosition()

      // Update physics for each object
      objects.forEach((obj, index) => {
        const velocity = velocities[index]

        // Rotate objects
        obj.rotation.x += 0.003
        obj.rotation.y += 0.002

        // Calculate distance to mouse
        const distanceToMouse = new THREE.Vector3()
        distanceToMouse.subVectors(obj.position, mouseWorldPos)
        const distanceLength = distanceToMouse.length()

        // Apply mouse force if within influence radius
        if (distanceLength < mouseInfluenceRadius) {
          // Normalize and scale the force based on distance (stronger when closer)
          const force = distanceToMouse
            .normalize()
            .multiplyScalar(mouseForceStrength * (1 - distanceLength / mouseInfluenceRadius))
          velocity.add(force)
        }

        // Calculate distance to center
        const distanceToCenter = new THREE.Vector3()
        distanceToCenter.subVectors(new THREE.Vector3(0, 0, 0), obj.position)
        const distanceToCenterLength = distanceToCenter.length()

        // Apply central zone attraction/repulsion
        if (distanceToCenterLength > centralZoneRadius) {
          // Outside central zone - attract towards it
          const attractionForce = distanceToCenter.normalize().multiplyScalar(centralAttractionStrength)
          velocity.add(attractionForce)
        } else {
          // Inside central zone - apply mild repulsion to distribute objects
          // Only if too close to center
          if (distanceToCenterLength < centralZoneRadius * 0.5) {
            const repulsionForce = distanceToCenter.normalize().multiplyScalar(-centralRepulsionStrength)
            velocity.add(repulsionForce)
          }
        }

        // Apply object-to-object repulsion to prevent clustering
        objects.forEach((otherObj, otherIndex) => {
          if (index !== otherIndex) {
            const distanceBetween = new THREE.Vector3()
            distanceBetween.subVectors(obj.position, otherObj.position)
            const distance = distanceBetween.length()

            if (distance < minDistanceBetweenObjects) {
              const repulsionForce = distanceBetween
                .normalize()
                .multiplyScalar(centralRepulsionStrength * (1 - distance / minDistanceBetweenObjects))
              velocity.add(repulsionForce)
            }
          }
        })

        // Apply friction
        velocity.multiplyScalar(friction)

        // Cap maximum velocity
        if (velocity.length() > maxVelocity) {
          velocity.normalize().multiplyScalar(maxVelocity)
        }

        // Update position
        obj.position.add(velocity)
      })

      renderer.render(scene, camera)
    }

    animate()

    // Add event listeners
    window.addEventListener("mousemove", onMouseMove)

    // Handle window resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth, window.innerHeight)
    }

    window.addEventListener("resize", handleResize)

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize)
      window.removeEventListener("mousemove", onMouseMove)

      if (containerRef.current) {
        containerRef.current.removeChild(renderer.domElement)
      }
    }
  }, [])

  return <div ref={containerRef} className="absolute inset-0 z-0" />
}
