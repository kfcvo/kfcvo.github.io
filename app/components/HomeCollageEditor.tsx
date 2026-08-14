"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState, type CSSProperties, type KeyboardEvent, type PointerEvent } from "react";

const STORAGE_KEY = "czy-home-collage-layout-v1";

const collageImages = [
  { id: "texture-01", src: "/home/home-texture-01.png", alt: "灰绿色抽象绘画", className: "collage-one" },
  { id: "texture-02", src: "/home/home-texture-02.png", alt: "淡蓝色花卉绘画", className: "collage-two" },
  { id: "texture-03", src: "/home/home-texture-03.png", alt: "蓝紫色花朵绘画", className: "collage-three" },
  { id: "texture-04", src: "/home/home-texture-04.png", alt: "树影与花朵绘画", className: "collage-four" },
  { id: "texture-05", src: "/home/home-texture-05.png", alt: "灰绿色百合绘画", className: "collage-five" },
  { id: "texture-06", src: "/home/home-texture-06.png", alt: "灰蓝色写意花卉", className: "collage-six" },
  { id: "texture-07", src: "/home/home-texture-07.png", alt: "淡紫色花蕊绘画", className: "collage-seven" },
  { id: "texture-08", src: "/home/home-texture-08.png", alt: "蓝灰色抽象纹理", className: "collage-eight" },
];

type LayoutItem = {
  x: number;
  y: number;
  width: number;
  height: number;
  rotation: number;
  z: number;
};

type DragMode = "move" | "resize-x" | "resize-y" | "resize-both";

type DragAction = {
  index: number;
  mode: DragMode;
  pointerId: number;
  startClientX: number;
  startClientY: number;
  sceneWidth: number;
  sceneHeight: number;
  startItem: LayoutItem;
};

const defaultLayout: LayoutItem[] = [
  { x: 29, y: 8, width: 27, height: 29, rotation: 0.7, z: 4 },
  { x: 9, y: 26, width: 29, height: 25, rotation: -0.5, z: 3 },
  { x: 33, y: 35, width: 27, height: 39, rotation: 0.4, z: 6 },
  { x: 55, y: 25, width: 31, height: 28, rotation: 0.25, z: 5 },
  { x: 18, y: 13, width: 19, height: 21, rotation: -1.2, z: 2 },
  { x: 74, y: 60, width: 26, height: 23, rotation: -0.6, z: 3 },
  { x: 22, y: 73, width: 24, height: 24, rotation: 0.9, z: 2 },
  { x: 75, y: 8, width: 20, height: 19, rotation: 1, z: 1 },
];

const clamp = (value: number, min: number, max: number) => Math.min(Math.max(value, min), max);
const round = (value: number) => Math.round(value * 100) / 100;

function isStoredLayout(value: unknown): value is LayoutItem[] {
  return Array.isArray(value)
    && value.length === collageImages.length
    && value.every((item) => item && typeof item === "object"
      && ["x", "y", "width", "height", "rotation", "z"].every((key) => typeof (item as Record<string, unknown>)[key] === "number"));
}

export function HomeCollageEditor() {
  const sceneRef = useRef<HTMLDivElement>(null);
  const dragRef = useRef<DragAction | null>(null);
  const [layout, setLayout] = useState(defaultLayout);
  const [editing, setEditing] = useState(false);
  const [selected, setSelected] = useState(0);
  const [ready, setReady] = useState(false);
  const [message, setMessage] = useState("");
  const [exportText, setExportText] = useState("");

  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed: unknown = JSON.parse(stored);
        if (isStoredLayout(parsed)) setLayout(parsed);
      }
    } catch {
      // Keep the curated default layout if local data is unavailable.
    }
    setReady(true);
  }, []);

  useEffect(() => {
    if (!ready) return;
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(layout));
  }, [layout, ready]);

  useEffect(() => {
    const handlePointerMove = (event: globalThis.PointerEvent) => {
      const action = dragRef.current;
      if (!action || event.pointerId !== action.pointerId) return;
      event.preventDefault();

      const dx = ((event.clientX - action.startClientX) / action.sceneWidth) * 100;
      const dy = ((event.clientY - action.startClientY) / action.sceneHeight) * 100;

      setLayout((current) => current.map((item, index) => {
        if (index !== action.index) return item;
        const next = { ...item };

        if (action.mode === "move") {
          next.x = round(clamp(action.startItem.x + dx, 0, 100 - action.startItem.width));
          next.y = round(clamp(action.startItem.y + dy, 0, 100 - action.startItem.height));
        }
        if (action.mode === "resize-x" || action.mode === "resize-both") {
          next.width = round(clamp(action.startItem.width + dx, 8, 100 - action.startItem.x));
        }
        if (action.mode === "resize-y" || action.mode === "resize-both") {
          next.height = round(clamp(action.startItem.height + dy, 8, 100 - action.startItem.y));
        }

        return next;
      }));
    };

    const handlePointerUp = (event: globalThis.PointerEvent) => {
      if (dragRef.current?.pointerId === event.pointerId) dragRef.current = null;
    };

    window.addEventListener("pointermove", handlePointerMove, { passive: false });
    window.addEventListener("pointerup", handlePointerUp);
    window.addEventListener("pointercancel", handlePointerUp);
    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerup", handlePointerUp);
      window.removeEventListener("pointercancel", handlePointerUp);
    };
  }, []);

  const startDrag = (event: PointerEvent<HTMLElement>, index: number, mode: DragMode) => {
    if (!editing || !sceneRef.current) return;
    event.preventDefault();
    event.stopPropagation();
    const rect = sceneRef.current.getBoundingClientRect();
    setSelected(index);
    setMessage("");
    dragRef.current = {
      index,
      mode,
      pointerId: event.pointerId,
      startClientX: event.clientX,
      startClientY: event.clientY,
      sceneWidth: rect.width,
      sceneHeight: rect.height,
      startItem: { ...layout[index] },
    };
  };

  const toggleEditing = () => {
    if (!editing && window.innerWidth < 720) {
      setMessage("请在电脑或较宽的窗口中调整首屏排版");
      return;
    }
    setEditing((value) => !value);
    setExportText("");
    setMessage(editing ? "排版已保存在当前浏览器" : "选择图片后拖动，使用边缘控制点拉伸");
  };

  const updateSelected = (changes: Partial<LayoutItem>) => {
    setLayout((current) => current.map((item, index) => index === selected ? { ...item, ...changes } : item));
  };

  const moveLayer = (direction: number) => {
    const values = layout.map((item) => item.z);
    const nextZ = direction > 0 ? Math.max(...values) + 1 : Math.min(...values) - 1;
    updateSelected({ z: nextZ });
  };

  const resetLayout = () => {
    setLayout(defaultLayout.map((item) => ({ ...item })));
    setSelected(0);
    setExportText("");
    setMessage("已恢复默认排版");
  };

  const copyLayout = async () => {
    const payload = JSON.stringify({
      version: 1,
      coordinateSystem: "percent",
      viewport: { width: window.innerWidth, height: window.innerHeight },
      items: collageImages.map((image, index) => ({ id: image.id, ...layout[index] })),
    }, null, 2);
    setExportText(payload);
    try {
      await navigator.clipboard.writeText(payload);
      setMessage("排版数据已复制，直接粘贴发给我即可");
    } catch {
      setMessage("请复制下方文本框里的排版数据并发给我");
    }
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLElement>, index: number) => {
    if (!editing || !["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown"].includes(event.key)) return;
    event.preventDefault();
    const amount = event.shiftKey ? 2 : 0.5;
    const item = layout[index];
    const next = { ...item };
    if (event.key === "ArrowLeft") next.x = clamp(item.x - amount, 0, 100 - item.width);
    if (event.key === "ArrowRight") next.x = clamp(item.x + amount, 0, 100 - item.width);
    if (event.key === "ArrowUp") next.y = clamp(item.y - amount, 0, 100 - item.height);
    if (event.key === "ArrowDown") next.y = clamp(item.y + amount, 0, 100 - item.height);
    setSelected(index);
    setLayout((current) => current.map((value, itemIndex) => itemIndex === index ? next : value));
  };

  return (
    <section className="collage-hero" aria-label="陈知雨个人作品集主视觉">
      <div className={`collage-scene${editing ? " is-editing" : ""}`} ref={sceneRef}>
        <button className="collage-editor-toggle" type="button" onClick={toggleEditing} aria-pressed={editing}>
          {editing ? "完成排版" : "调整图片排版"}
        </button>

        <p className="collage-kicker">PRODUCT · AI · EXPERIENCE</p>
        <p className="collage-edition">PORTFOLIO / 2026<br />SINGAPORE — BEIJING</p>

        {collageImages.map((image, index) => {
          const item = layout[index];
          const style = {
            "--collage-x": `${item.x}%`,
            "--collage-y": `${item.y}%`,
            "--collage-width": `${item.width}%`,
            "--collage-height": `${item.height}%`,
            "--collage-rotation": `${item.rotation}deg`,
            "--collage-z": item.z,
          } as CSSProperties;

          return (
            <figure
              className={`collage-piece ${image.className}${editing && selected === index ? " is-selected" : ""}`}
              key={image.src}
              style={style}
              tabIndex={editing ? 0 : -1}
              aria-label={editing ? `图片 ${index + 1}：${image.alt}，可拖动调整` : undefined}
              onPointerDown={(event) => startDrag(event, index, "move")}
              onKeyDown={(event) => handleKeyDown(event, index)}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 720px) 45vw, 28vw"
                priority={index < 4}
                unoptimized
                draggable={false}
              />
              {editing && (
                <>
                  <span className="collage-item-number">{index + 1}</span>
                  <span className="collage-resize-handle handle-x" onPointerDown={(event) => startDrag(event, index, "resize-x")} aria-hidden="true" />
                  <span className="collage-resize-handle handle-y" onPointerDown={(event) => startDrag(event, index, "resize-y")} aria-hidden="true" />
                  <span className="collage-resize-handle handle-both" onPointerDown={(event) => startDrag(event, index, "resize-both")} aria-hidden="true" />
                </>
              )}
            </figure>
          );
        })}

        <div className="collage-note" aria-label="我的设计方法">
          <small>MY APPROACH</small>
          <p>Observe deeply.<br />Frame clearly.<br />Build thoughtfully.</p>
        </div>
        <span className="collage-sound" aria-hidden="true">♪</span>
        <Link className="collage-signature" href="#practice">My Portfolio <span>↘</span></Link>

        {editing && (
          <div className="collage-editor-toolbar" role="toolbar" aria-label="图片排版工具">
            <strong>图片 {selected + 1}</strong>
            <button type="button" onClick={() => updateSelected({ rotation: round(layout[selected].rotation - 1) })}>左转</button>
            <button type="button" onClick={() => updateSelected({ rotation: round(layout[selected].rotation + 1) })}>右转</button>
            <button type="button" onClick={() => moveLayer(1)}>移到上层</button>
            <button type="button" onClick={() => moveLayer(-1)}>移到下层</button>
            <button type="button" onClick={resetLayout}>恢复默认</button>
            <button className="toolbar-primary" type="button" onClick={copyLayout}>复制排版数据</button>
          </div>
        )}

        {message && <p className="collage-editor-message" role="status">{message}</p>}
        {exportText && (
          <div className="collage-export-panel">
            <label htmlFor="collage-layout-data">把下面数据复制并发给我</label>
            <textarea id="collage-layout-data" readOnly value={exportText} onFocus={(event) => event.currentTarget.select()} />
            <button type="button" onClick={() => setExportText("")}>关闭</button>
          </div>
        )}
      </div>
    </section>
  );
}
