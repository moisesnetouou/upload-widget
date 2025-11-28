import * as Collapsible from '@radix-ui/react-collapsible'

import { UploadWidgetDropzone } from "./upload-widget-dropzone";
import { UploadWidgetHeader } from "./upload-widget-header";
import { UploadWidgetUploadList } from "./upload-widget-upload-list";
import { useState } from 'react';
import { UploadWidgetMinimizedButton } from './upload-widget-minimized-button';

export function UploadWidget() {
  const [isWidgetOpened, setIsWidgetOpened] = useState(false)

  return(
    <Collapsible.Root onOpenChange={setIsWidgetOpened}>
      <div className="bg-zinc-900 overflow-hidden w-[360px] rounded-3xl shadow-shape" >
        {!isWidgetOpened && (
          <UploadWidgetMinimizedButton />
        )}

        <Collapsible.Content>
          <UploadWidgetHeader />

          <div className="flex flex-col gap-4 py-3">
            <UploadWidgetDropzone />

            <div className="h-px box-content bg-zinc-800 border-t border-black/50" />

            <UploadWidgetUploadList />
          </div>
        </Collapsible.Content>
      </div>
    </Collapsible.Root>
  )
}

