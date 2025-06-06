import AccordianList from "./AccordionList";
import { CategoryProps } from "../../types/ProblemSolving";
import { useState } from "react";

const ProblemCategory = ({
  categoryData,
  selectedLessonId,
  setSelectedLessonId,
  selectedLessonName,
  setSelectedLessonName,
  selectedSubject,
  setSelectedSubject,
  selectedUnit,
  setSelectedUnit,
  setSelectedUnitId,
}: CategoryProps) => {
  const [categoryOpen, setCategoryOpen] = useState(false); // 카테고리 열기 상태

  // console.log(categoryData);
  const handleCategoryClick = () => {
    setCategoryOpen(!categoryOpen); // 카테고리 열기 상태 토글
    setSelectedUnit(null);
    setSelectedUnit(null);
    setSelectedLessonName(null);
    setSelectedLessonId(null);
  };
  return (
    <div className="relative flex flex-col gap-5">
      <div
        onClick={handleCategoryClick}
        className=" flex justify-between items-center border border-gray-200 px-4 py-2  rounded-[10px]"
      >
        {selectedSubject !== null &&
        selectedUnit !== null &&
        selectedLessonName !== null ? (
          <p className="body-medium text-gray-700">
            {`${selectedSubject} > ${selectedUnit} > ${selectedLessonName}`}
          </p>
        ) : (
          <p className="body-small text-gray-300">단원을 선택해주세요.</p>
        )}

        <img src="/icons/down.png" alt="" className="w-9 h-9" />
      </div>
      {/* 아코디언 */}
      <div className="absolute z-10  top-15 left-0 shadow-lg rounded-[20px] bg-white w-full">
        {categoryOpen && (
          <AccordianList
            categoryOpen={categoryOpen}
            setCategoryOpen={setCategoryOpen}
            categoryData={categoryData}
            selectedLessonId={selectedLessonId}
            setSelectedLessonId={setSelectedLessonId}
            setSelectedLessonName={setSelectedLessonName}
            setSelectedSubject={setSelectedSubject}
            setSelectedUnit={setSelectedUnit}
            setSelectedUnitId={setSelectedUnitId}
          />
        )}
      </div>
    </div>
  );
};

export default ProblemCategory;
