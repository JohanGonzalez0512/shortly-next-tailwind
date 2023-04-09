import { Form, Link } from "./index"

const linksInfo = [
  {
    original: "https://frontendmentor.io",
    shortened: "https://rel.ink/9b9di7",
  },
  {
    original: "https://twitter.com/frontendmentor",
    shortened: "https://rel.ink/mxk0P6",
  },
  {
    original: "https://youtube.com/c/FrontendMentor",
    shortened: "https://rel.ink/7Yl0wB",
  }
]

const Shorten = () => {
  return (
    //  Shorten Section
    <section className="relative bg-gray-100">
      {/* Shorten Container */}
      <div className="container mx-auto p-6 space-y-6 max-w-4xl">

        {/* Form */}
        <Form />

        {/* Shorten Links */}
        {
          linksInfo.map((link, index) => {
            return (
              <Link key={index} original={link.original} shortened={link.shortened} />
            )
          })
        }
      </div>
    </section>
  )
}

export default Shorten