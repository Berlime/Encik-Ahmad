/**
 * Utility functions for handling images
 */

/**
 * Get the URL for an image from the assets folder
 * @param imageName - The name of the image file including extension
 * @returns The URL for the image
 */
export function getImageUrl(imageName: string): string {
  try {
    // For Vite, we can use the import.meta.url approach
    return new URL(`../assets/images/${imageName}`, import.meta.url).href;
  } catch (error) {
    console.error(`Error loading image: ${imageName}`, error);
    return "";
  }
}

/**
 * Get all images from the assets folder (only works during build time)
 * @returns An array of image URLs
 */
export function getAllImages(): string[] {
  const imageContext = import.meta.glob("../assets/images/*.*", {
    eager: true,
  });
  return Object.keys(imageContext).map((path) => {
    const fileName = path.split("/").pop() || "";
    return getImageUrl(fileName);
  });
}
