/*You are given a 0-indexed array of positive integers tasks, representing tasks that need to be completed in order, where tasks[i] represents the type of the ith task.

You are also given a positive integer space, which represents the minimum number of days that must pass after the completion of a task before another task of the same type can be performed.

Each day, until all tasks have been completed, you must either:

Complete the next task from tasks, or
Take a break.
Return the minimum number of days needed to complete all tasks.
Input: tasks = [1,2,1,2,3,1], space = 3
Output: 9
Explanation:
One way to complete all tasks in 9 days is as follows:
Day 1: Complete the 0th task.  #1
Day 2: Complete the 1st task.  #2
Day 3: Take a break.
Day 4: Take a break.
Day 5: Complete the 2nd task.  #1
Day 6: Complete the 3rd task.  #2
Day 7: Take a break.
Day 8: Complete the 4th task.  #3
Day 9: Complete the 5th task.  #1
It can be shown that the tasks cannot be completed in less than 9 days.
*/

var taskSchedulerII = function(tasks, space) {
    const lastIndex = new Map();
    let currentDay = 1;
    
    for (let i = 0; i < tasks.length; i++) {
      const task = tasks[i];
      const lastTaskIndex = lastIndex.get(task);
      if (lastTaskIndex !== undefined && currentDay - lastTaskIndex < space) {
        currentDay += space - (currentDay - lastTaskIndex);
      }
      lastIndex.set(task, currentDay);
      currentDay++;
    }
    return currentDay;
};
// 1,2,0,0,1,2,3,0,1
// 1,2,3,4,5,6,7,8,9
console.log(taskSchedulerII([5,8,8,5],2))