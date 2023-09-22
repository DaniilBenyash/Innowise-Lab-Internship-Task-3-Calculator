import { AddCommand } from './mathCommands/addNumbers/addCommand';
import { SubtractCommand } from './mathCommands/subtractCommand/subtractCommand';
import { MultiplyCommand } from './mathCommands/multiplyCommand/multiplyCommand';
import { DivideCommand } from './mathCommands/divideCommand/divideCommand';
import { PercentCommand } from './mathCommands/percentCommand/percentCommand';
import { ChangeSignCommand } from './mathCommands/changeSignCommand/changeSignCommand';
import { SqrtTwoCommand } from './mathCommands/sqrtTwoCommand/sqrtTwoCommand';
import { SqrtThreeCommand } from './mathCommands/sqrtThreeCommand/sqrtThreeCommand';
import { SqrtYCommand } from './mathCommands/sqrtYCommand/sqrtYCommand';
import { TenXCommand } from './mathCommands/tenXCommand/tenXCommand';
import { OneDivideByXCommand } from './mathCommands/oneDivideByXCommand/oneDivideByXCommand';
import { RootOfTwoCommand } from './mathCommands/rootOfTwoCommand/rootOfTwoCommand';
import { RootOfThreeCommand } from './mathCommands/rootOfThreeCommand/rootOfThreeCommand';
import { RootOfYCommand } from './mathCommands/rootOfYCommand/rootOfYCommand';
import { FactorialCommand } from './mathCommands/factorialCommand/factorialCommand';

import { mc } from './operationsWithMemory/mc/mc';
import { MR } from './operationsWithMemory/mr/mr';
import { MS } from './operationsWithMemory/ms';
import { MPlus } from './operationsWithMemory/m+/m+';
import { MMinus } from './operationsWithMemory/m-/m-';

import { calculator } from './calculator';

export function compute(operands) {
  const leftOperand = parseFloat(operands.leftOperand);
  const rightOperand = parseFloat(operands.rightOperand);
  const key = 'memory';

  switch (operands.operationOperand) {
    case '+':
      calculator.setCommand(new AddCommand(leftOperand, rightOperand));
      calculator.executeCommand();
      break;
    case '-':
      calculator.setCommand(new SubtractCommand(leftOperand, rightOperand));
      calculator.executeCommand();
      break;
    case '*':
      calculator.setCommand(new MultiplyCommand(leftOperand, rightOperand));
      calculator.executeCommand();
      break;
    case '÷':
      calculator.setCommand(new DivideCommand(leftOperand, rightOperand));
      calculator.executeCommand();
      break;
    case '%':
      calculator.setCommand(new PercentCommand(leftOperand));
      calculator.executeCommand();
      break;
    case '±':
      calculator.setCommand(new ChangeSignCommand(leftOperand));
      calculator.executeCommand();
      break;
    case 'x²':
      calculator.setCommand(new SqrtTwoCommand(leftOperand));
      calculator.executeCommand();
      break;
    case 'x³':
      calculator.setCommand(new SqrtThreeCommand(leftOperand));
      calculator.executeCommand();
      break;
    case 'xy':
      calculator.setCommand(new SqrtYCommand(leftOperand, rightOperand));
      calculator.executeCommand();
      break;
    case '10x':
      calculator.setCommand(new TenXCommand(leftOperand));
      calculator.executeCommand();
      break;
    case '1/x':
      calculator.setCommand(new OneDivideByXCommand(leftOperand));
      calculator.executeCommand();
      break;
    case '²√x':
      calculator.setCommand(new RootOfTwoCommand(leftOperand));
      calculator.executeCommand();
      break;
    case '³√x':
      calculator.setCommand(new RootOfThreeCommand(leftOperand));
      calculator.executeCommand();
      break;
    case 'y√x':
      calculator.setCommand(new RootOfYCommand(leftOperand, rightOperand));
      calculator.executeCommand();
      break;
    case 'n!':
      calculator.setCommand(new FactorialCommand(leftOperand));
      calculator.executeCommand();
      break;
    case 'mc':
      mc(key);
      break;
    case 'mr':
      calculator.setCommand(new MR(key));
      calculator.executeCommand();
      break;
    case 'ms':
      calculator.setCommand(new MS(leftOperand, key));
      calculator.executeCommand();
      break;
    case 'm+':
      calculator.setCommand(new MPlus(leftOperand, key));
      calculator.executeCommand();
      break;
    case 'm-':
      calculator.setCommand(new MMinus(leftOperand, key));
      calculator.executeCommand();
      break;
    default:
      return operands;
  }
  return operands;
}
