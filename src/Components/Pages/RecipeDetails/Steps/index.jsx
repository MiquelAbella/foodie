import React from "react";

export const Steps = ({ data }) => {
  return (
    <div className="flex items-center justify-center">
      <div className="w-full px-4 md:px-0  grid md:grid-cols-2 md:w-4/5 pb-20 gap-8">
        <div className="rounded-md border border-slate-400 p-12 text-gray-600">
          <p className="text-center mb-2">INGREDIENTS</p>
          {data.extendedIngredients.map((ingredient, idx) => {
            return (
              <div
                key={ingredient.name}
                className="flex md:w-5/6 items-start justify-between gap-4 pb-2"
              >
                <p className="text-gray-600 font-bold">
                  {ingredient.name.toUpperCase()}
                </p>
                <p className="text-gray-600">
                  {Math.round(ingredient.measures.metric.amount)}
                  {ingredient.measures.metric.unitShort}
                </p>
              </div>
            );
          })}
        </div>
        <div className="flex flex-col items-center justify-center rounded-md border border-slate-400 p-12 text-gray-600">
          <p>INSTRUCTIONS</p>
          <ol className="list-decimal">
            {data.analyzedInstructions.map((instruction) => {
              return instruction.steps.map((step) => {
                return (
                  <li key={step.step} className="pt-3">
                    {step.step}
                  </li>
                );
              });
            })}
          </ol>
        </div>
      </div>
    </div>
  );
};
