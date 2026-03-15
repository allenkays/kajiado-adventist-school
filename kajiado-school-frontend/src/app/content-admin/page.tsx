"use client";

import { useMemo, useState } from "react";
import { useSiteContent } from "@/components/SiteContentProvider";
import { defaultSiteContent, SiteContent } from "@/lib/siteContent";

export default function ContentAdminPage() {
  const { content, setContent, resetContent } = useSiteContent();
  const [jsonText, setJsonText] = useState(() => JSON.stringify(content, null, 2));
  const [message, setMessage] = useState("");

  const isChanged = useMemo(
    () => jsonText.trim() !== JSON.stringify(content, null, 2).trim(),
    [jsonText, content]
  );

  const applyChanges = () => {
    try {
      const parsed = JSON.parse(jsonText) as SiteContent;
      setContent(parsed);
      setMessage("✅ Content saved in browser storage.");
    } catch {
      setMessage("❌ Invalid JSON. Fix formatting before saving.");
    }
  };

  const loadCurrent = () => {
    setJsonText(JSON.stringify(content, null, 2));
    setMessage("Loaded current content.");
  };

  const loadDefault = () => {
    setJsonText(JSON.stringify(defaultSiteContent, null, 2));
    setMessage("Loaded default content template.");
  };

  const downloadJson = () => {
    const blob = new Blob([jsonText], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "site-content.json";
    a.click();
    URL.revokeObjectURL(url);
    setMessage("Downloaded site-content.json.");
  };

  const uploadJson = async (file: File) => {
    const text = await file.text();
    setJsonText(text);
    setMessage("JSON file loaded into editor. Validate and Save.");
  };

  return (
    <section className="max-w-6xl mx-auto px-4 py-12 space-y-6">
      <h1 className="text-3xl font-bold">Website Content Admin (Frontend CMS)</h1>
      <p>
        Edit site content JSON here. Click <strong>Save to Browser</strong> for instant local updates,
        then <strong>Download JSON</strong> and upload the file as
        <code className="mx-1">/site-content.json</code> on your hosting platform for global updates.
      </p>

      <div className="flex flex-wrap gap-3">
        <button onClick={applyChanges} className="bg-green-700 text-white px-4 py-2 rounded">Save to Browser</button>
        <button onClick={downloadJson} className="bg-darkBrown text-white px-4 py-2 rounded">Download JSON</button>
        <button onClick={loadCurrent} className="border px-4 py-2 rounded">Reload Current</button>
        <button onClick={loadDefault} className="border px-4 py-2 rounded">Load Default Template</button>
        <button onClick={resetContent} className="border px-4 py-2 rounded">Reset Browser Content</button>
        <label className="border px-4 py-2 rounded cursor-pointer">
          Upload JSON
          <input
            type="file"
            accept="application/json"
            className="hidden"
            onChange={(e) => {
              const file = e.target.files?.[0];
              if (file) {
                void uploadJson(file);
              }
            }}
          />
        </label>
      </div>

      {message ? <p className="text-sm font-medium">{message}</p> : null}
      {isChanged ? <p className="text-sm text-amber-700">Unsaved changes in editor.</p> : null}

      <textarea
        value={jsonText}
        onChange={(e) => setJsonText(e.target.value)}
        className="w-full min-h-[65vh] p-4 border rounded font-mono text-sm"
      />
    </section>
  );
}
