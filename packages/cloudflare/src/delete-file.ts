import { DeleteObjectCommand } from '@aws-sdk/client-s3'
import { r2 } from './r2'

type Params = {
  fileUrl?: string
  filekey?: string
}

export async function deleteFile({ fileUrl, filekey }: Params): Promise<void> {
  if (fileUrl) {
    const key = fileUrl.split('/')[3].split('?')[0]

    await r2.send(
      new DeleteObjectCommand({
        Bucket: 'lifefeet-dev',
        Key: key,
      })
    )
  }

  if (filekey) {
    await r2.send(
      new DeleteObjectCommand({
        Bucket: 'lifefeet-dev',
        Key: filekey,
      })
    )
  }
}
