import { memo } from "react";
const TaskItem = ({ task }) => {
  console.log("render TaskItem");
  return <li>{task}</li>;
};
export default memo(TaskItem, (prevProps, nextProps) => {
  return prevProps.task === nextProps.task;
});
