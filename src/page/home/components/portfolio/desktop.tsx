import type { ReactNode } from "react";
import Image from "next/image";
import { cn } from "@/common/utils";

type DesktopItem = {
  image: string | string[];
  name?: ReactNode;
  description?: ReactNode;
  children?: ReactNode;
};

export const PortfolioDesktop = () => {
  const desktopData: DesktopItem[] = [
    {
      image: "/images/desktop/1.png",
      name: "Воркспейс оператора",
      description:
        "Моей задачей было — спроектировать главный рабочий экран оператора для обработки входящих обращений граждан в режиме реального времени. Основной задачей было сохранить скорость, предсказуемость и ощущение контроля над процессом",
      children: <DataOne />,
    },
    {
      image: "/images/desktop/2.png",
      name: "KYC / Процедура проверки пользователя",
      description:
        "Процедура используется для подтверждения личности гражданина в рамках цифровых государственных сервисов. Ошибка в сценарии проверки напрямую влияет на доверие к системе и юридическую валидность результата.",
      children: <DataOne />,
    },
    {
      image: "/images/desktop/3.png",
      name: "Статистика звонков",
      description:
        "Передо мной стояла задача заменить сводную статистику детализированной аналитикой, что со временем позволила выявить поведенческие зависимости и использовать их для повышения эффективности работы операторов.",
      children: <DataOne />,
    },

    // ✅ "Другие экраны..."
    {
      image: [
        "/images/desktop/14.png",
        "/images/desktop/16.png",
        "/images/desktop/11.png",
        "/images/desktop/9.png",
        "/images/desktop/10.png",
        "/images/desktop/6.png",
        "/images/desktop/7.png",
      ],
      name: <span className="text-gradient-welcome">Другие экраны...</span>,
    },
  ];

  return (
    <div className="container space-y-20">
      {desktopData.map((item, idx) => {
        const isGallery = Array.isArray(item.image);

        return (
          <div
            key={idx + "desktop"}
            className={cn(isGallery && "flex flex-col-reverse gap-16")}
          >
            {/* ВИЗУАЛ */}
            {isGallery ? (
              <div className="center gap-16 flex-col">
                {(item.image as string[]).map((src, i) => (
                  <Image
                    key={`${idx}-desktop-${i}`}
                    className="w-[80vw] object-cover h-[47.15rem]"
                    src={src}
                    alt={`desktop-other-${i}`}
                    width={1600}
                    height={1200}
                  />
                ))}
              </div>
            ) : (
              <Image
                className="w-[80vw] object-cover h-[47.15rem]"
                src={item.image as string}
                alt={typeof item.name === "string" ? item.name : "desktop-screen"}
                width={1600}
                height={1200}
                priority={idx === 0}
              />
            )}

            {/* ТЕКСТ (будет сверху у "Другие экраны...", снизу у обычных кейсов) */}
            <div>
              {item.name && (
                <p className="text-4xl mt-8 font-bold text-center">
                  {item.name}
                </p>
              )}
              {item.description && (
                <p className="text-2xl mt-4 font-medium text-center text-[#FFFFFF8F]">
                  {item.description}
                </p>
              )}
              {item.children}
            </div>
          </div>
        );
      })}
    </div>
  );
};

const DataOne = () => {
  return (
    <div className="bg-[#FFFFFF14] h-14 w-fit mx-auto px-10 center text-2xl font-semibold rounded-full mt-8 cursor-pointer">
      Описания кейса пока нет
    </div>
  );
};
