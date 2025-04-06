import Image from 'next/image'

export default function NotFound() {
    return (
      <section>
        <h1 className="mb-3 text-2xl font-semibold tracking-tighter">
          Meet Artemis, aka Arty, Artery, or LeBonBon Jr.
        </h1>
        <p className="mb-4">Born in December 2024, Artemis is a mighty little British Shorthair. We named her after the Greek goddess of the hunt, for her energetic nature and relentless pursuit of things to scratch and play with. She also has the nickname of LeBonBon Jr. for her athletic jumping ability.</p>
        <div>
        <Image 
          alt="Artemis1"
          src="/artemis1.jpg"
          width={300}
          height={150}
          className="imgBordered"
        />
      </div>
      <div className="mb4"></div>
      <div>
        <Image 
          alt="Artemis2"
          src="/artemis2.jpg"
          width={300}
          height={150}
          className="imgBordered"
        />
      </div>
      <div>
        <Image 
          alt="Artemis3"
          src="/artemis3.jpg"
          width={300}
          height={150}
          className="imgBordered"
        />
      </div>
      </section>
    )
  }
  