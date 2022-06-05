class ScratchMath {
  getInfo() {
    return {
      id: 'scratchmath', // change this if you make an actual extension!
      name: 'Math',
      blocks: [
        {
          opcode: 'xor',
          blockType: Scratch.BlockType.BOOLEAN,
          text: '[ONE] xor [TWO]',
          arguments: {
            ONE: {
              type: Scratch.ArgumentType.BOOLEAN,
              defaultValue: 'First value'
            },
            TWO: {
              type: Scratch.ArgumentType.BOOLEAN,
              defaultValue: 'Second value'
            }
          }
        }
      ]
    };
  }
  xor(args) {
    // Note strict equality: Inputs must match exactly: in type, case, etc.
    if (args.ONE ^ args.TWO > 0) {

    return true;
}
else {
return false;
}
  }
}
Scratch.extensions.register(new ScratchMath());