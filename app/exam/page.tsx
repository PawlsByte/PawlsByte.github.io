import ExamRunner from "@/components/exam/ExamRunner";

export default function Page() {
  const items = [
    { id: "1", stem: "Sample item stem...", options: [ {id:"A",text:"Option A"}, {id:"B",text:"Option B"} ] }
  ];
  return <ExamRunner items={items} />;
}
