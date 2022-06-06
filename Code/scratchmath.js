class ScratchMath {
  getInfo() {
    return {
      id: 'scratchmath', // change this if you make an actual extension!
      name: 'Math',
      color1: #24fc03,
      color2: #3adb21
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
        },
        {
          opcode: 'infinity',
          blockType: Scratch.BlockType.REPORTER,
          text: 'Infinity',
          disableMonitor: true
        },
         {
          opcode: 'pi',
          blockType: Scratch.BlockType.REPORTER,
          text: 'Pi',
          disableMonitor: true
        },
        {
          opcode: 'e',
          blockType: Scratch.BlockType.REPORTER,
          text: 'E',
          disableMonitor: true
        },
        {
          opcode: 'negate',
          blockType: Scratch.BlockType.REPORTER,
          text: '-[ONE]',
          arguments: {
            ONE: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: '5'
            }
          }
        },
        {
          opcode: 'gret',
          blockType: Scratch.BlockType.BOOLEAN,
          text: '[ONE] >= [TWO]',
          arguments: {
            ONE: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: '5'
            },
            TWO: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: '5'
            }
          }
        },
        {
          opcode: 'ltet',
          blockType: Scratch.BlockType.BOOLEAN,
          text: '[ONE] <= [TWO]',
          arguments: {
            ONE: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: '4'
            },
            TWO: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: '4'
            }
          }
        },
        {
          opcode: 'powersboi',
          blockType: Scratch.BlockType.REPORTER,
          text: '[ONE] ^ [TWO]',
          arguments: {
            ONE: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: '2'
            },
            TWO: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: '3'
            }
          }
        },
        {
          opcode: 'rootthingy',
          blockType: Scratch.BlockType.REPORTER,
          text: '[ONE] root of [TWO]',
          arguments: {
            ONE: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: '2'
            },
            TWO: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: '3'
            }
          }
        },
        {
          opcode: 'mathrandom',
          blockType: Scratch.BlockType.REPORTER,
          text: 'Random',
          disableMonitor: true
          
        },
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
  infinity() {
    return Math.pow(200,1000)
  }
  pi() {
    return 3.14159265359;
  }
  e() {
    return 2.718281828459045;
  }
  negate(args) {
    return 0 - args.ONE;
  }
  gret(args) {
    return args.ONE >= args.TWO;
  }
  ltet(args) {
    return args.ONE <= args.TWO;
  }
  powersboi(args) {
    return args.ONE ** args.TWO;
  }
  rootthingy(args) {
    return args.TWO ** (1/args.ONE);
  }
  mathrandom() {
    return Math.random();
  }
}
Scratch.extensions.register(new ScratchMath());
