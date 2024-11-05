export default function ImageLink({ href, src, className, alt }) {
  return (
    <a
      href={href}
      target="_blank"
    >
      <img
        src={src}
        className={"logo " + className}
        alt={alt}
      />
    </a>
  );
}
