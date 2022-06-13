class EvaluateExtension {
  getInfo() {
    return {
      id: 'eval', // change this if you make an actual extension!
      name: 'JavaScript',
      blocks: [
        {
          opcode: 'evaluate',
          blockType: Scratch.BlockType.REPORTER,
          text: 'Eval [ONE]',
          arguments: {
            ONE: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'First value'
            }
          }
        },
        {
          opcode: 'execute',
          blockType: Scratch.BlockType.COMMAND,
          text: 'Exec [ONE]',
          arguments: {
            ONE: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'First value'
            }
          }
        }
      ]
    };
  }
  evaluate(args) {
    // Note strict equality: Inputs must match exactly: in type, case, etc.
    return eval(args.ONE)
  }
  execute(args) {
    // Note strict equality: Inputs must match exactly: in type, case, etc.
    eval(args.ONE)
  }
}
Scratch.extensions.register(new EvaluateExtension());