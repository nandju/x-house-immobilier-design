export default function ValuesSection() {
    return (
      <section className="py-12 px-4 max-w-6xl mx-auto">
        <div className="bg-white rounded-3xl border border-gray-200 p-8 md:p-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold">Nos valeurs</h2>
            <p className="text-gray-600 mt-4 max-w-4xl mx-auto text-lg">
              Chez Luxury Home Abidjan, nous nous engageons à offrir une expérience immobilière haut de gamme, fondée sur
              des principes forts qui guident chacune de nos actions.
            </p>
          </div>
  
          <div className="grid md:grid-cols-2 gap-6">
            {/* Excellence */}
            <div className="bg-blue-50 rounded-3xl p-8">
              <h3 className="text-4xl font-bold text-blue-500 mb-4 pt-0 md:pt-40">Excellence</h3>
              <p className="text-blue-600">
                Nous mettons un point d'honneur à offrir un service irréprochable, en sélectionnant des biens d'exception
                et en accompagnant nos clients avec professionnalisme.
              </p>
            </div>
  
            {/* Transparence */}
            <div className="bg-gray-50 rounded-3xl p-8">
              <h3 className="text-4xl font-bold text-gray-900 mb-4 pt-0 md:pt-40">Transparence</h3>
              <p className="text-gray-700">
                Nous instaurons une relation de confiance avec nos clients et partenaires en garantissant des transactions
                claires et sécurisées.
              </p>
            </div>
  
            {/* Exclusivité */}
            <div className="bg-gray-50 rounded-3xl p-8">
              <h3 className="text-4xl font-bold text-gray-900 mb-4 pt-0 md:pt-40">Exclusivité</h3>
              <p className="text-gray-700">
                Chaque bien que nous proposons reflète un standard élevé et une sélection minutieuse pour répondre aux
                attentes d'une clientèle exigeante.
              </p>
            </div>
  
            {/* Innovation */}
            <div className="bg-blue-50 rounded-3xl p-8">
              <h3 className="text-4xl font-bold text-blue-500 mb-4 pt-0 md:pt-40">Innovation</h3>
              <p className="text-blue-600">
                Nous utilisons les dernières technologies et tendances du marché pour offrir une expérience moderne et
                fluide.
              </p>
            </div>
          </div>
        </div>
      </section>
    )
  }
  
  