import React, { useState } from 'react';
import {
  Languages,
  Volume2,
  ArrowRightLeft,
  Search,
  Sparkles,
  Info,
  CheckCircle2,
  Mic,
  Copy,
  BookOpen
} from 'lucide-react';
import {
  POPULAR_PHRASES,
  LANGUAGE_OPTIONS,
  MULTILINGUAL_DICTIONARY
} from '../data/phrasebookData';
import { DemoBadge } from '../components/common/DemoBadge';

export const TranslatePage: React.FC = () => {
  const [sourceLang, setSourceLang] = useState('en-IN');
  const [targetLang, setTargetLang] = useState('hi-IN');
  const [inputText, setInputText] = useState('Where is the nearest railway station?');
  const [translatedText, setTranslatedText] = useState('नज़दीकी रेलवे स्टेशन कहाँ है? (Nazdeeki railway station kahan hai?)');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [copied, setCopied] = useState(false);
  const [speaking, setSpeaking] = useState(false);

  const categories = ['All', 'Greetings', 'Directions', 'Food & Dining', 'Shopping', 'Emergency'];

  const filteredPhrases = POPULAR_PHRASES.filter(p => {
    return selectedCategory === 'All' || p.category === selectedCategory;
  });

  // Browser Web Speech API Speech Synthesis
  const speakText = (text: string, langCode: string) => {
    if (!('speechSynthesis' in window)) {
      alert('Speech synthesis is not supported on this browser.');
      return;
    }
    window.speechSynthesis.cancel(); // stop any ongoing audio
    const cleanText = text.replace(/\(.*?\)/g, '').trim(); // read native script or pure text
    const utterance = new SpeechSynthesisUtterance(cleanText);
    utterance.lang = langCode || 'hi-IN';
    utterance.rate = 0.9; // natural speed

    utterance.onstart = () => setSpeaking(true);
    utterance.onend = () => setSpeaking(false);
    utterance.onerror = () => setSpeaking(false);

    window.speechSynthesis.speak(utterance);
  };

  const handleTranslate = () => {
    const query = inputText.toLowerCase().trim();

    // Check multilingual dictionary first
    for (const [key, mapping] of Object.entries(MULTILINGUAL_DICTIONARY)) {
      if (query.includes(key)) {
        if (mapping[targetLang]) {
          setTranslatedText(mapping[targetLang]);
          return;
        }
      }
    }

    // Match against popular phrases
    const matched = POPULAR_PHRASES.find(p =>
      p.english.toLowerCase().includes(query) || query.includes(p.english.toLowerCase().slice(0, 10))
    );

    if (matched) {
      setTranslatedText(`${matched.hindiScript} (${matched.pronunciation})`);
      return;
    }

    // Demo fallback with polite phonetic translation simulation
    setTranslatedText(`[Simulated Translation in ${targetLang}]: "${inputText}" — Demo vocabulary output.`);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(translatedText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSelectPhrase = (phrase: typeof POPULAR_PHRASES[0]) => {
    setInputText(phrase.english);
    setTranslatedText(`${phrase.hindiScript} (${phrase.pronunciation})`);
  };

  return (
    <div className="min-h-screen bg-slate-50 py-10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 text-brand-700 text-xs font-bold mb-2">
            <Languages className="w-3.5 h-3.5" />
            <span>Multilingual Speech & Phrasebook</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-navy-900 font-serif">
            Voice & Text Travel Translator
          </h1>
          <p className="text-sm text-slate-600 mt-2">
            Communicate effortlessly across India with translated phrases, pronunciation guides, and built-in browser speech synthesis.
          </p>
        </div>

        {/* TRANSLATION BOX */}
        <div className="bg-white rounded-3xl border border-slate-200/80 shadow-md p-6 sm:p-8 mb-10 space-y-6">
          {/* Language Selectors Bar */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pb-4 border-b border-slate-100">
            <div className="w-full sm:w-1/2 flex items-center gap-2">
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">From:</span>
              <select
                value={sourceLang}
                onChange={e => setSourceLang(e.target.value)}
                className="w-full px-3 py-2 text-xs font-semibold rounded-xl border border-slate-300 bg-slate-50"
              >
                {LANGUAGE_OPTIONS.map(l => (
                  <option key={l.code} value={l.code}>{l.label}</option>
                ))}
              </select>
            </div>

            <button
              type="button"
              onClick={() => {
                const temp = sourceLang;
                setSourceLang(targetLang);
                setTargetLang(temp);
              }}
              className="p-2 rounded-full hover:bg-slate-100 text-slate-500 transition-colors"
              title="Swap Languages"
            >
              <ArrowRightLeft className="w-4 h-4" />
            </button>

            <div className="w-full sm:w-1/2 flex items-center gap-2">
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">To:</span>
              <select
                value={targetLang}
                onChange={e => setTargetLang(e.target.value)}
                className="w-full px-3 py-2 text-xs font-semibold rounded-xl border border-slate-300 bg-slate-50"
              >
                {LANGUAGE_OPTIONS.map(l => (
                  <option key={l.code} value={l.code}>{l.label}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Input & Output Panels */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Input Side */}
            <div className="space-y-3">
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                Original Text (Type or pick from phrasebook below):
              </label>
              <textarea
                rows={4}
                value={inputText}
                onChange={e => setInputText(e.target.value)}
                placeholder="Enter English or travel inquiry..."
                className="w-full p-4 text-sm rounded-2xl border border-slate-300 focus:border-brand-600 focus:outline-hidden focus:ring-2 focus:ring-brand-500/20"
              />
              <button
                type="button"
                onClick={handleTranslate}
                className="w-full py-2.5 px-4 bg-brand-600 hover:bg-brand-700 text-white font-bold text-xs rounded-xl shadow-xs transition-all flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>Translate Expression</span>
              </button>
            </div>

            {/* Translated Output Side */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                  Translated Output & Pronunciation:
                </label>
                <DemoBadge label="Simulated Translation" />
              </div>

              <div className="w-full h-32 p-4 rounded-2xl bg-brand-50/60 border border-brand-200 text-slate-800 text-sm overflow-y-auto font-medium">
                {translatedText || 'Translation will appear here...'}
              </div>

              {/* Speech & Copy Controls */}
              <div className="flex items-center gap-2 pt-1">
                <button
                  type="button"
                  onClick={() => speakText(translatedText, targetLang)}
                  className={`flex-1 py-2 px-3 rounded-xl border font-bold text-xs transition-all flex items-center justify-center gap-1.5 ${
                    speaking
                      ? 'bg-amber-100 border-amber-300 text-amber-800 animate-pulse'
                      : 'bg-white hover:bg-slate-50 border-slate-300 text-slate-700'
                  }`}
                >
                  <Volume2 className="w-4 h-4 text-brand-600" />
                  <span>{speaking ? 'Speaking...' : 'Listen to Pronunciation'}</span>
                </button>

                <button
                  type="button"
                  onClick={handleCopy}
                  className="py-2 px-3 rounded-xl border border-slate-300 hover:bg-slate-50 text-slate-700 font-semibold text-xs flex items-center gap-1"
                >
                  <Copy className="w-3.5 h-3.5" />
                  <span>{copied ? 'Copied!' : 'Copy'}</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* ESSENTIAL TRAVEL PHRASEBOOK */}
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h2 className="text-xl font-bold text-navy-900 font-serif flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-brand-600" />
                <span>Essential Indian Travel Phrasebook</span>
              </h2>
              <p className="text-xs text-slate-500 mt-0.5">
                Click any phrase to load translation and hear spoken pronunciation.
              </p>
            </div>

            {/* Category Selector */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold shrink-0 transition-all ${
                    selectedCategory === cat
                      ? 'bg-brand-600 text-white shadow-xs'
                      : 'bg-white hover:bg-slate-100 text-slate-700 border border-slate-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredPhrases.map(p => (
              <div
                key={p.id}
                onClick={() => handleSelectPhrase(p)}
                className="bg-white p-4 rounded-2xl border border-slate-200/80 hover:border-brand-400 hover:shadow-md transition-all cursor-pointer flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 bg-slate-100 px-2 py-0.5 rounded-md">
                      {p.category}
                    </span>
                    <button
                      onClick={e => {
                        e.stopPropagation();
                        speakText(p.hindiScript, 'hi-IN');
                      }}
                      className="text-brand-600 hover:text-brand-800 p-1 rounded-full hover:bg-brand-50"
                      title="Listen"
                    >
                      <Volume2 className="w-4 h-4" />
                    </button>
                  </div>
                  <h4 className="text-xs font-bold text-slate-900">{p.english}</h4>
                  <div className="mt-2 text-sm font-semibold text-brand-800">
                    {p.hindiScript}
                  </div>
                  <div className="text-xs text-slate-500 font-serif italic mt-0.5">
                    {p.pronunciation}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
