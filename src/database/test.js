const Database = require('./db')
const saveOrphanage = require('./saveOrphanage')

Database.then(async db=> {
    // inserir dados na tabela
   await saveOrphanage(db,{
        lat: "-5.4956612",
        lng: "-47.4943441",
        name: "lar das meninas",
        about: "Presta assistência a crianças de 06 a 15 anos que se encontra em situação de risco e/ou vulnerabilidade social.",
        whatsapp: "9818177618",
        images: [
            "https://images.unsplash.com/photo-1600818272779-cfa6145222f0?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
            "https://images.unsplash.com/photo-1595207011175-3d72f5a3b21c?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9"
        ].toString(),
        instructions: "Venha como se sentir a vontade e traga muito amor e paciência para dar.",
        opening_hours: "Horário de visitas Das 18h até 8h",
        open_on_weekends: "0"
   })

    // consultar dados na tabela
    //const selectedOrphanages = await db.all("SELECT * FROM orphanages")
    //console.log(selectedOrphanages)

    //consultat somente 1 orfanato, pelo id
    //const orphanage = await db.all('SELECT * FROM orphanages WHERE id = "2"')
    //console.log(orphanage)

    //deletar dado da tabela

   //wait db.run("DELETE FROM orphanages WHERE id ='3'")

})