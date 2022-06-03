class Utils {
  getInfo() {
    return {
      id: 'utils', // change this if you make an actual extension!
      name: 'Utilities',
      blocks: [
        {
          opcode: 'strictlyEquals',
          blockType: Scratch.BlockType.BOOLEAN,
          text: '[ONE] == [TWO]',
          arguments: {
            ONE: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'First value'
            },
            TWO: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'Second value'
            }
          }
        },
        {
          opcode: 'true',
          blockType: Scratch.BlockType.BOOLEAN,
          text: 'true',
          
        },
   {
          opcode: 'false',
          blockType: Scratch.BlockType.BOOLEAN,
          text: 'false',
        },
        {
          opcode: 'gte',
          blockType: Scratch.BlockType.BOOLEAN,
          text: '[ONE] >= [TWO]',
          arguments: {
            ONE: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: '5'
            },
            TWO: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: '5'
            }
          }
        },
        {
          opcode: 'lte',
          blockType: Scratch.BlockType.BOOLEAN,
          text: '[ONE] <= [TWO]',
          arguments: {
            ONE: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: '4'
            },
            TWO: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: '4'
            }
          }
        },
{
          opcode: 'mew',
          blockType: Scratch.BlockType.REPORTER,
          text: 'Infinity',
          
          
        },
        {
          opcode: 'power',
          blockType: Scratch.BlockType.REPORTER,
          text: '[ONE] ^ [TWO]',
          arguments: {
            ONE: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: '5'
            },
            TWO: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: '3'
            }
          }
        },
        {
          opcode: 'pi',
          blockType: Scratch.BlockType.REPORTER,
          text: 'Pi',
          
          
        },
{
          opcode: 'e',
          blockType: Scratch.BlockType.REPORTER,
          text: 'Euler',
          
          
        },
{
          opcode: 'cot',
          blockType: Scratch.BlockType.REPORTER,
          text: 'cot [ONE]',
          arguments: {
            ONE: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: '5'
            }
          }
        },
{
          opcode: 'sec',
          blockType: Scratch.BlockType.REPORTER,
          text: 'sec [ONE]',
          arguments: {
            ONE: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: '5'
            }
          }
        },
{
          opcode: 'csc',
          blockType: Scratch.BlockType.REPORTER,
          text: 'csc [ONE]',
          arguments: {
            ONE: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: '5'
            }
          }
        },
        

      ]
    };
  }
  strictlyEquals(args) {
    // Note strict equality: Inputs must match exactly: in type, case, etc.
    return args.ONE === args.TWO;
  }
  true() {
return true;
}
false() {
return false;
}
gte(args) {
return args.ONE >= args.TWO;
}
lte(args) {
return args.ONE <= args.TWO;
}
mew() {
return Infinity;
}
power(args) {
return Math.pow(args.ONE, args.TWO);
}
pi() {
return 3.141593;
}
e() {
return 2.71828;
}
cot(args) {
return 1/Math.tan(args.ONE);
}
sec(args) {
return 1/Math.cos(args.ONE);
}
csc(args) {
return 1/Math.sin(args.ONE);
}
}
Scratch.extensions.register(new Utils());