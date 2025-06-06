import AssessmentAiSummary from "./AssessmentAiSummary";
import AssessmentRadar from "./AssessmentRadar";
// import ConceptPracticeHistory from "./ConceptPracticeHistory";
// import ConceptPracticeHistoryModal from "./ConceptPracticeHistoryModal";
import StudyPlan from "./StudyPlan";
import { useState, useEffect } from "react";
import { getUserReport } from "@/services/api/MyStudyReport";

type StudyPlanItem = {
  step: number;
  content: string;
};

const AssessmentReport = ({ userName }: { userName: string }) => {
  const [aiDiagnosis, setAiDiagnosis] = useState<string>("");
  const [studyPlan, setStudyPlan] = useState<StudyPlanItem[]>([]);
  // const [isModalOpen, setIsModalOpen] = useState(false);

  const fetchUserReport = async () => {
    const res = await getUserReport();
    setAiDiagnosis(res.ai_diagnosis);
    setStudyPlan(res.study_plan);
    // console.log(res);
  };

  useEffect(() => {
    fetchUserReport();
  }, []);

  return (
    <div className="w-full flex justify-center py-5">
      <div className="flex flex-col gap-20 w-full max-w-[82%]">
        <div className="flex justify-center">
          <p className="text-gray-700 headline-large">
            {userName}님의 <span className="text-primary-700">학습 데이터</span>
            를 기반으로 분석한{" "}
            <span className="text-primary-700">총 리포트</span>입니다.
          </p>
        </div>
        <AssessmentRadar />
        <AssessmentAiSummary aiDiagnosis={aiDiagnosis} />
        <StudyPlan studyPlan={studyPlan} />
        {/* <ConceptPracticeHistory setIsModalOpen={setIsModalOpen} /> */}
        {/* {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
            <div className=" w-[90%] max-w-[40%]">
              <ConceptPracticeHistoryModal setIsModalOpen={setIsModalOpen} />
            </div>
          </div>
        )} */}
      </div>
    </div>
  );
};

export default AssessmentReport;
