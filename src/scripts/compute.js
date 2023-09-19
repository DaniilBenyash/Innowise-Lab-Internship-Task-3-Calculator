import AddCommand from './mathCommands/addNumbers/addCommand';
import SubtractCommand from './mathCommands/subtractCommand/subtractCommand';
import MultiplyCommand from './mathCommands/multiplyCommand/multiplyCommand';
import DivideCommand from './mathCommands/divideCommand/divideCommand';
import PercentCommand from './mathCommands/percentCommand/percentCommand';
import ChangeSignCommand from './mathCommands/changeSignCommand/changeSignCommand';
import SqrtTwoCommand from './mathCommands/sqrtTwoCommand/sqrtTwoCommand';
import SqrtThreeCommand from './mathCommands/sqrtThreeCommand/sqrtThreeCommand';
import SqrtYCommand from './mathCommands/sqrtYCommand/sqrtYCommand';
import TenXCommand from './mathCommands/tenXCommand/tenXCommand';
import OneDivideByXCommand from './mathCommands/oneDivideByXCommand/oneDivideByXCommand';
import RootOfTwoCommand from './mathCommands/rootOfTwoCommand/rootOfTwoCommand';
import RootOfThreeCommand from './mathCommands/rootOfThreeCommand/rootOfThreeCommand';
import RootOfYCommand from './mathCommands/rootOfYCommand/rootOfYCommand';
import FactorialCommand from './mathCommands/factorialCommand/factorialCommand';

import mc from './operationsWithMemory/mc/mc';
import MR from './operationsWithMemory/mr/mr';
import MS from './operationsWithMemory/ms';
import MPlus from './operationsWithMemory/m+/m+';
import MMinus from './operationsWithMemory/m-/m-';

import calculator from './calculator';

export default function compute(data) {
  const prev = parseFloat(data.previousNumber);
  const current = parseFloat(data.currentNumber);

  switch (data.operation) {
    case '+':
      calculator.setCommand(new AddCommand(prev, current));
      calculator.executeCommand();
      break;
    case '-':
      calculator.setCommand(new SubtractCommand(prev, current));
      calculator.executeCommand();
      break;
    case '*':
      calculator.setCommand(new MultiplyCommand(prev, current));
      calculator.executeCommand();
      break;
    case '÷':
      calculator.setCommand(new DivideCommand(prev, current));
      calculator.executeCommand();
      break;
    case '%':
      calculator.setCommand(new PercentCommand(prev));
      calculator.executeCommand();
      break;
    case '±':
      calculator.setCommand(new ChangeSignCommand(prev));
      calculator.executeCommand();
      break;
    case 'x²':
      calculator.setCommand(new SqrtTwoCommand(prev));
      calculator.executeCommand();
      break;
    case 'x³':
      calculator.setCommand(new SqrtThreeCommand(prev));
      calculator.executeCommand();
      break;
    case 'xy':
      calculator.setCommand(new SqrtYCommand(prev, current));
      calculator.executeCommand();
      break;
    case '10x':
      calculator.setCommand(new TenXCommand(prev));
      calculator.executeCommand();
      break;
    case '1/x':
      calculator.setCommand(new OneDivideByXCommand(prev));
      calculator.executeCommand();
      break;
    case '²√x':
      calculator.setCommand(new RootOfTwoCommand(prev));
      calculator.executeCommand();
      break;
    case '³√x':
      calculator.setCommand(new RootOfThreeCommand(prev));
      calculator.executeCommand();
      break;
    case 'y√x':
      calculator.setCommand(new RootOfYCommand(prev, current));
      calculator.executeCommand();
      break;
    case 'n!':
      calculator.setCommand(new FactorialCommand(prev));
      calculator.executeCommand();
      break;
    case 'mc':
      mc();
      break;
    case 'mr':
      calculator.setCommand(new MR());
      calculator.executeCommand();
      break;
    case 'ms':
      calculator.setCommand(new MS(prev));
      calculator.executeCommand();
      break;
    case 'm+':
      calculator.setCommand(new MPlus(prev));
      calculator.executeCommand();
      break;
    case 'm-':
      calculator.setCommand(new MMinus(prev));
      calculator.executeCommand();
      break;
    default:
      return '';
  }
  return '';
}
