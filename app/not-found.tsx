export default function NotFound() {
  return (
    <div className="pt-16">
      <h1 className="text-3xl font-semibold tracking-tight">No signal</h1>
      <p className="mt-3 text-[15px] max-w-2xl" style={{ color: 'var(--muted)' }}>
        That page is not here. Try the <a href="/">front page</a> or{' '}
        <a href="/blog/">the blog</a>.
      </p>
    </div>
  );
}
