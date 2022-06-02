document.addEventListener('DOMContentLoaded', () => {
  const cirles1 = document.getElementsByClassName('cir-1')
  const cirles2 = document.getElementsByClassName('cir-2')
  const button = document.getElementsByTagName('button')[0]

  state = {
    preStage: false,
    stage: false,
    first: false,
    second: false,
    third: false,
    go: false,
    out: false
  }

  
  button.addEventListener('click', () => {
    console.log('clicked')
    console.log(state)

    if (!state.preStage) {
      button.innerText = 'STAGE'
      for(let i = 0; i < cirles1.length; i ++) {
        cirles1[i].setAttribute('fill', 'yellow')
      }
      state.preStage = !state.preStage
    } else if (!state.stage) {
      button.innerText = 'READY!'
      for(let i = 0; i < cirles2.length; i ++) {
        cirles2[i].setAttribute('fill', 'yellow')
      }
      state.stage = !state.stage
    } else {
      button.innerText = 'GO!'
      button.className = 'go'
    }
    
  })
})