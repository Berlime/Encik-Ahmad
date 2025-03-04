import { useState, useRef } from "react";
import { Button } from "./button";
import { UploadIcon, XIcon } from "lucide-react";

interface ImageUploadProps {
  onImageUpload?: (file: File) => void;
  onImageRemove?: () => void;
  previewUrl?: string;
  className?: string;
  accept?: string;
  maxSizeMB?: number;
}

export function ImageUpload({
  onImageUpload,
  onImageRemove,
  previewUrl,
  className = "",
  accept = "image/*",
  maxSizeMB = 5,
}: ImageUploadProps) {
  const [preview, setPreview] = useState<string | undefined>(previewUrl);
  const [error, setError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Check file size
    if (file.size > maxSizeMB * 1024 * 1024) {
      setError(`File size exceeds ${maxSizeMB}MB limit`);
      return;
    }

    // Reset error
    setError(null);

    // Create preview
    const reader = new FileReader();
    reader.onload = () => {
      setPreview(reader.result as string);
    };
    reader.readAsDataURL(file);

    // Call callback
    if (onImageUpload) {
      onImageUpload(file);
    }
  };

  const handleRemove = () => {
    setPreview(undefined);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
    if (onImageRemove) {
      onImageRemove();
    }
  };

  const triggerFileInput = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  return (
    <div className={`w-full ${className}`}>
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        accept={accept}
        className="hidden"
      />

      {preview ? (
        <div className="relative rounded-md overflow-hidden border border-border">
          <img
            src={preview}
            alt="Preview"
            className="w-full h-auto object-cover"
          />
          <Button
            variant="destructive"
            size="icon"
            className="absolute top-2 right-2 h-8 w-8 rounded-full opacity-80 hover:opacity-100"
            onClick={handleRemove}
          >
            <XIcon className="h-4 w-4" />
          </Button>
        </div>
      ) : (
        <div
          onClick={triggerFileInput}
          className="border-2 border-dashed border-muted-foreground/25 rounded-md p-8 text-center cursor-pointer hover:bg-muted/50 transition-colors"
        >
          <UploadIcon className="mx-auto h-12 w-12 text-muted-foreground/50" />
          <p className="mt-2 text-sm text-muted-foreground">
            Click to upload an image
          </p>
          <p className="mt-1 text-xs text-muted-foreground/70">
            Max size: {maxSizeMB}MB
          </p>
        </div>
      )}

      {error && <p className="mt-2 text-sm text-destructive">{error}</p>}
    </div>
  );
}
