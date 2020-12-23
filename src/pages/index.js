import * as React from "react"
import SEO from "./../components/seo";
import TeamBlock from "./../components/teamBlock"

const team = [
  {
    name: 'Marion Jacinte',
    avatar: 'https://avatars3.githubusercontent.com/u/4263437?s=460&u=f169fcc751367687e6796542db6aa5bdf11b0098&v=4',
    linkedin: 'https://fr.linkedin.com/in/marion-jacinte-29203a92',
    text: 'Performance - Clean design - Modern CSS',
    twitter: '',
    website: ''
  },
  {
    name: 'Mathieu De Gracia',
    avatar: 'https://avatars2.githubusercontent.com/u/11473997?s=460&u=52f80e74dccdfc1a723f609c2d1fc81bba6251ae&v=4',
    linkedin: 'https://fr.linkedin.com/in/mathieu-de-gracia',
    twitter: 'https://twitter.com/degraciamathieu',
    text: 'Clean code - Problem solving - Static analysis',
    github: 'https://github.com/DeGraciaMathieu'
  }
]

const IndexPage = () => {
  return (
    <>
      <main className="font-body bg-gray-900">
        <SEO
          title="Accueil"
        />
        <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          <div className="text-center">
            <img src="https://cdn.discordapp.com/emojis/773945464117657670.png?v=1" alt="" className="mx-auto rounded-lg" />
            <p className="text-4xl font-extrabold sm:text-5xl sm:tracking-tight lg:text-6xl text-white mt-3">Übermeows</p>
            <p className="max-w-xl mt-5 mx-auto text-xl text-gray-300">L'alliance impromptue d'un dev back et front, parfois on code des trucs, parfois on mange des glaces.</p>
            <a href="mailto:contact@ubermeows.com" class="mt-6 inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-indigo-700 hover:bg-indigo-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              Nous contacter
            </a>
          </div>
        </div>
        <div className="mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24">
          <div className="space-y-12 lg:grid lg:grid-cols-3 lg:gap-8 lg:space-y-0">
            <div className="space-y-5 sm:space-y-4">
              <h2 className="text-3xl font-extrabold text-white tracking-tight sm:text-4xl">À propos de nous</h2>
              <p className="text-xl text-gray-300">Plus de 15 ans d'expériences en développement mit à profit d'applications Web modernes propulsées par Laravel / VueJS / TailwindCSS.</p>
              <p class="text-xl text-gray-300">Nous offrons une expertise en gestion &amp; développement de projets, déploiement & tests automatisés, analyse de code, UI/UX, performance & accessibilité.</p>
            </div>
            <div className="lg:col-span-2">
              <ul className="space-y-4 sm:grid sm:grid-cols-2 sm:gap-6 sm:space-y-0 mx-auto lg:gap-8">
                {team.map(member => (
                  <TeamBlock member={member} />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </main>
      <footer className="bg-gray-900 border-t border-gray-800">
        <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 md:flex md:items-center md:justify-between lg:px-8">
          <div class="mt-8 md:mt-0 md:order-1">
            <p class="text-center text-base text-gray-300">&copy; 2020 Übermeows</p>
          </div>
        </div>
      </footer>
    </>
  )
}

export default IndexPage
