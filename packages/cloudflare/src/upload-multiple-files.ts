import { PutObjectCommand } from '@aws-sdk/client-s3'
import { getSignedUrl } from '@aws-sdk/s3-request-presigner'
import { r2 } from './r2'

type UploadMultipleFilesProps = {
  file: File
}[]

export async function uploadMultipleFiles(
  photos: UploadMultipleFilesProps
): Promise<void> {
  for (let i = 0; i < photos.length; i++) {
    const uploadUrl = await getSignedUrl(
      r2,
      new PutObjectCommand({
        Bucket: 'lifefeet-dev', // can be customer name
        Key: photos[i].file.name,
        ContentType: photos[i].file.name,
      })
    )

    fetch(uploadUrl, {
      method: 'PUT',
      headers: {
        'Content-Type': photos[i].file.name,
      },
      body: photos[i].file,
    })
  }
}
