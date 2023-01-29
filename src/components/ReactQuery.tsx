import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { AlbumList } from "./AlbumList";
import { Sidebar } from "./Sidebar";
import { TodoList } from "./TodoList";



export const ReactQuery = () => {


  return (
    <div style={{ display: 'flex', padding: '16px' }}>
      <Sidebar/>
      <div style={{ flexGrow: 1 }}>
      <ErrorBoundary fallback={<p>Albumエラーです</p>}>
        <Suspense fallback={<p>Albumロード中です</p>} >
          <AlbumList/>
        </Suspense>
      </ErrorBoundary>
      <ErrorBoundary fallback={<p>Todoエラーです</p>}>
        <Suspense fallback={<p>Todoロード中です</p>} >
          <TodoList/>
        </Suspense>
      </ErrorBoundary>
      </div>
    </div>
  )
}
