'use client'
export default function errorBoundary({ error }: { error: Error }) {
  return <div>
   { error.message}
  </div>;
}
