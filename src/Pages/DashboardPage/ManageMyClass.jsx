import TeacherClassCard from "../../Components/Card/TeacherClassCard";

const ManageMyClass = () => {
  return (
    <div>
      <div className="grid grid-cols-3 gap-5 p-5">
        <TeacherClassCard></TeacherClassCard>
        <TeacherClassCard></TeacherClassCard>
        <TeacherClassCard></TeacherClassCard>
        <TeacherClassCard></TeacherClassCard>
        <TeacherClassCard></TeacherClassCard>
      </div>
    </div>
  );
};

export default ManageMyClass;
