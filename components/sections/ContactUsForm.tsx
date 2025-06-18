'use client';
import { useState } from 'react';
import { Button } from '../ui/button';

interface Feature {
  title: string;
  description: string;
  imageAlt: string;
  buttonText: string;
  buttonLink: string;
  backgroundColor: string;
}

interface ProductFeaturesProps {
  features: Feature[];
}

export const ConstactUsForm: React.FC<ProductFeaturesProps> = ({}) => {
  const [email, setEmail] = useState('');
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [status, setStatus] = useState('');
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setStatus('Submitting...');

    const formData = {
      fields: [
        {
          name: 'email',
          value: email,
        },
        {
          name: 'firstname',
          value: firstname,
        },
        {
          name: 'lastname',
          value: lastname,
        },
      ],
    };

    try {
      const response = await fetch(
        'https://api.hsforms.com/submissions/v3/integration/submit/243073664/75078314-aeca-43c0-b273-f0fecd81e5e8',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        }
      );

      const result = await response.json();

      if (response.ok) {
        setStatus('Thank you! Your submission has been received.');
      } else {
        setStatus(result.message || 'Something went wrong.');
      }
    } catch (error) {
      setStatus(`Error submitting form. ${error}`);
    }
  };

  return (
    <>
      <div className="font-poppins md: mt-20 flex w-full justify-center bg-transparent px-2">
        <div className="rounded-4xl bg-gradient-to-b from-black to-white text-black">
          <div className="m-[1px] flex flex-col gap-4 overflow-x-hidden rounded-4xl bg-white px-2 py-6 md:w-[1200px] md:gap-8">
            <h1 className="mb-6 px-16 text-center text-2xl font-semibold md:text-5xl md:font-bold">
              Socie-Pro AI
            </h1>
            <h2 className="text-center text-xl md:text-3xl">
              Ready to Take Control of Your Social Media?
            </h2>
            <p className="text-socie-gray text-center text-xs md:text-xl">
              Let SociePro-AI handle all the routine tasks.
            </p>
            <div className="mx-2 flex flex-col flex-wrap items-center gap-2 md:flex-row"></div>
            <div className="mx-auto max-w-4xl">
              <form className="space-y-6">
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <div>
                    <label
                      htmlFor="firstName"
                      className="block text-sm font-medium text-gray-700"
                    >
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      placeholder="First Name"
                      required
                      onChange={(e) => setFirstname(e.target.value)}
                      className="focus:ring-socie-gray focus:border-socie-gray mt-2 block w-full rounded-md border border-gray-300 bg-[#F5F5F5] px-4 py-2 shadow-sm placeholder:text-xs focus:ring-2 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="lastName"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      required
                      placeholder="Last Name"
                      onChange={(e) => setLastname(e.target.value)}
                      className="focus:ring-socie-gray focus:border-socie-gray mt-2 block w-full rounded-md border border-gray-300 bg-[#F5F5F5] px-4 py-2 shadow-sm placeholder:text-xs focus:ring-2 focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Email
                  </label>

                  <input
                    type="email"
                    required
                    id="email"
                    name="email"
                    placeholder="Email"
                    onChange={(e) => setEmail(e.target.value)}
                    className="focus:ring-socie-gray focus:border-socie-gray mt-2 block w-full rounded-md border border-gray-300 bg-[#F5F5F5] p-4 px-4 py-2 shadow-sm placeholder:text-xs focus:ring-2 focus:outline-none"
                  />
                </div>

                <div className="flex w-full flex-col items-center justify-center gap-4">
                  <Button
                    type="submit"
                    onClick={handleSubmit}
                    className="w-fit px-20 py-6"
                  >
                    Get Notified
                  </Button>
                  <p>{status}</p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
