import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Check, Sliders, Cpu, FileCheck2, PartyPopper } from 'lucide-react';

interface WorkflowStepperProps {
  currentStep: 1 | 2 | 3 | 4;
}

export const WorkflowStepper: React.FC<WorkflowStepperProps> = ({ currentStep }) => {
  const navigate = useNavigate();

  const steps = [
    { number: 1, label: 'Trip Preferences', icon: Sliders, path: '/plan/preferences' },
    { number: 2, label: 'Input Review & Process', icon: Cpu, path: '/plan/processing' },
    { number: 3, label: 'Itinerary Verification', icon: FileCheck2, path: '/plan/review' },
    { number: 4, label: 'Trip Confirmation', icon: PartyPopper, path: '/plan/confirmation' }
  ];

  return (
    <div className="w-full bg-white border-b border-slate-200/80 sticky top-16 z-30 shadow-xs">
      <div className="max-w-5xl mx-auto px-4 py-3 sm:py-4">
        {/* Mobile Step Header */}
        <div className="sm:hidden flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-6 h-6 rounded-full bg-brand-600 text-white flex items-center justify-center text-xs font-bold">
              {currentStep}
            </span>
            <span className="text-sm font-semibold text-slate-800">
              Step {currentStep} of 4: {steps[currentStep - 1].label}
            </span>
          </div>
          <span className="text-xs text-slate-500 font-medium">
            {Math.round((currentStep / 4) * 100)}% Complete
          </span>
        </div>

        {/* Desktop Step Bar */}
        <div className="hidden sm:flex items-center justify-between">
          {steps.map((step, idx) => {
            const isCompleted = step.number < currentStep;
            const isCurrent = step.number === currentStep;
            const Icon = step.icon;
            const isClickable = isCompleted;

            return (
              <React.Fragment key={step.number}>
                <button
                  type="button"
                  disabled={!isClickable}
                  onClick={() => isClickable && navigate(step.path)}
                  className={`flex items-center gap-3 group text-left transition-all ${
                    isClickable ? 'cursor-pointer hover:opacity-80' : 'cursor-default'
                  }`}
                >
                  <div
                    className={`w-9 h-9 rounded-full flex items-center justify-center font-bold text-xs transition-all ${
                      isCompleted
                        ? 'bg-emerald-600 text-white shadow-xs'
                        : isCurrent
                        ? 'bg-brand-600 text-white ring-4 ring-brand-100 shadow-sm'
                        : 'bg-slate-100 text-slate-400 border border-slate-200'
                    }`}
                  >
                    {isCompleted ? <Check className="w-4 h-4 stroke-[3]" /> : <Icon className="w-4 h-4" />}
                  </div>
                  <div>
                    <span
                      className={`block text-[11px] font-semibold uppercase tracking-wider ${
                        isCurrent
                          ? 'text-brand-700'
                          : isCompleted
                          ? 'text-emerald-700'
                          : 'text-slate-400'
                      }`}
                    >
                      Step {step.number}
                    </span>
                    <span
                      className={`text-sm font-semibold transition-colors ${
                        isCurrent
                          ? 'text-slate-900 font-bold'
                          : isCompleted
                          ? 'text-slate-700'
                          : 'text-slate-400'
                      }`}
                    >
                      {step.label}
                    </span>
                  </div>
                </button>

                {idx < steps.length - 1 && (
                  <div
                    className={`flex-1 h-0.5 mx-3 sm:mx-4 rounded-full transition-all ${
                      idx < currentStep - 1 ? 'bg-emerald-500' : 'bg-slate-200'
                    }`}
                  />
                )}
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </div>
  );
};
