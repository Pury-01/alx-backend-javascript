export default function taskBlock(trueorFalse) {
	var task = false;
	var task2 = true;

        if (trueorFalse) {
          let task = true;
          let task2 = false;
        }
        
	return [task, task2];
}
