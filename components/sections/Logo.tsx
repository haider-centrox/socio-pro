import React from 'react';
import Image from 'next/image';

// Import the image
import logo1 from '../../public/logo1.png';
import logo2 from '../../public/logo2.png';
import logo3 from '../../public/logo3.png';
import logo4 from '../../public/logo4.png';
import logo5 from '../../public/logo5.png';
import logo6 from '../../public/logo6.png';
import logo7 from '../../public/logo7.png';

const Logo: React.FC = () => {
  return (
    <div className="flex w-full flex-wrap items-center justify-center gap-6">
      <Image
        src={logo1}
        alt="Logo 1"
        className="hidden rounded-full md:block"
      />
      <Image
        src={logo3}
        alt="Logo 3"
        className="hidden rounded-full md:block"
      />
      <Image
        src={logo4}
        alt="Logo 4"
        className="hidden rounded-full md:block"
      />
      <Image
        src={logo5}
        alt="Logo 5"
        className="hidden rounded-full md:block"
      />
      <Image
        src={logo2}
        alt="Logo 2"
        className="hidden rounded-full md:block"
      />
      <Image
        src={logo6}
        alt="Logo 6"
        className="hidden rounded-full md:block"
      />
      <Image
        src={logo7}
        alt="Logo 7"
        className="hidden rounded-full md:block"
      />
      <Image
        src={logo1}
        alt="Logo 1"
        className="rounded-full md:hidden md:w-auto"
        layout="intrinsic"
      />
      <Image
        src={logo2}
        alt="Logo 2"
        className="w-44 rounded-full md:hidden md:w-auto"
        layout="intrinsic"
      />
      <Image
        src={logo3}
        alt="Logo 3"
        className="w-32 rounded-full md:hidden md:w-auto"
        layout="intrinsic"
      />
      <Image
        src={logo4}
        alt="Logo 4"
        className="w-24 rounded-full md:hidden md:w-auto"
        layout="intrinsic"
      />
      <Image
        src={logo5}
        alt="Logo 5"
        className="w-32 rounded-full md:hidden md:w-auto"
        layout="intrinsic"
      />

      <Image
        src={logo6}
        alt="Logo 6"
        className="rounded-full md:hidden md:w-auto"
        layout="intrinsic"
      />
      <Image
        src={logo7}
        alt="Logo 7"
        className="rounded-full md:hidden md:w-auto"
        layout="intrinsic"
      />
    </div>
  );
};

export default Logo;
