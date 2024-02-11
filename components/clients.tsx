import Image from "next/image";

export default function OurClients() {
  return (
    <>
      <div
        x-data="{}"
        x-init="$nextTick(() => {
           let ul = $refs.logos;
           ul.insertAdjacentHTML('afterend', ul.outerHTML);
           ul.nextSibling.setAttribute('aria-hidden', 'true');
       })"
        className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)"
      >
        <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
          <li>
            <Image src="./vercel.svg" alt="Facebook" width={100} height={100} />
          </li>
          <li>
            <Image src="./vercel.svg" alt="Facebook" width={100} height={100} />
          </li>
          <li>
            <Image src="./vercel.svg" alt="Facebook" width={100} height={100} />
          </li>
          <li>
            <Image src="./vercel.svg" alt="Facebook" width={100} height={100} />
          </li>
          <li>
            <Image src="./vercel.svg" alt="Facebook" width={100} height={100} />
          </li>
          <li>
            <Image src="./vercel.svg" alt="Facebook" width={100} height={100} />
          </li>
        </ul>
      </div>
    </>
  );
}
