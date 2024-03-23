function saturdayFun(activity="roller-skate") {
    return `This Saturday, I want to ${activity}!`
}

let mondayWork = function(activity="go to the office") {
    return `This Monday, I will ${activity}.`
  }
  let wrapAdjective = function(style="*") {
    return function(hum="special") {
      return `You are ${style}${hum}${style}!`
    }
  }
  const encouragingPromptFunction = wrapAdjective("!!!")
  wrapAdjective("%")("a dedicated programmer")