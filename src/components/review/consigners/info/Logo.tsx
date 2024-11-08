import Image from "next/image"


const Logo = () => {
  return(
    <div className="border-2 border-black p-2 rounded-lg">
      <Image
        src="/images/logo.jpeg"
        width={200}
        height={200}
        alt = ""
      />
    </div>
  )
}

export default Logo