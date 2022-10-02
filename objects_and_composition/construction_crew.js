function constructionCrew(obj) {
    if (obj.dizziness === true){
        obj.levelOfHydrated = (obj.weight * 0.1 * obj.experience) + obj.levelOfHydrated
        obj.dizziness = false
    }
    console.log(obj)
}

constructionCrew({ weight: 95,
  experience: 3,
  levelOfHydrated: 0,
  dizziness: false })