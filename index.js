function introduction(name) {
    return `Hi, my name is ${name}.`;
  }
  function introductionWithLanguage(name, language) {
    return `Hi, my name is ${name} and I am learning to program in ${language}.`;
  }
  function introductionWithLanguageOptional(name, language = "JavaScript") {
    return `Hi, my name is ${name} and I am learning to program in ${language}.`;
  }
    
  console.log(introduction("Alice")); // Outputs: Hi, my name is Alice.
  console.log(introductionWithLanguage("Alice", "Python")); // Outputs: Hi, my name is Alice and I am learning to program in Python.
  console.log(introductionWithLanguageOptional("Alice")); // Outputs: Hi, my name is Alice and I am learning to program in JavaScript.
  console.log(introductionWithLanguageOptional("Alice", "Python")); // Outputs: Hi, my name is Alice and I am learning to program in Python.
  