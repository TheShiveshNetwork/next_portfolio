import { generateReactHelpers } from "@uploadthing/react/hooks";

import type { OurFileRouter } from "@/app/api/uploadthing/core";
import { generateComponents } from "@uploadthing/react";

export const { useUploadThing, uploadFiles } =
    generateReactHelpers<OurFileRouter>();

export const { UploadButton, UploadDropzone, Uploader } =
    generateComponents<OurFileRouter>();