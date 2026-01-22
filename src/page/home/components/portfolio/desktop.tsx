import { cn } from "@/common/utils";
import Image from "next/image";

export const PortfolioDesktop = () => {
  const desktopData: Array<{
    image: string | string[];
    name?: React.ReactNode;
    description?: React.ReactNode;
    children?: React.ReactNode;
  }> = [
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
        "Процедура используется для подтверждения личности гражданина в раках цифровых государственных сервисов. Ошибка в сценарии проверки напрямую влияет на доверие к системе и юридическую валидность результата.",
      children: <DataOne />,
    },
    {
      image: "/images/desktop/3.png",
      name: "Статистика звонков",
      description:
        "Передо мной стояла задача заменить сводную статистику детализированной аналитикой, что со временем позволила выявить поведенческие зависимости и использовать их для повышения эффективности работы операторов.",
      children: <DataOne />,
    },

    // ✅ ДОБАВИЛИ "ДРУГИЕ ЭКРАНЫ..."
    {
      image: [
        "/images/desktop/other/1.png",
        "/images/desktop/other/2.png",
        "/images/desktop/other/3.png",
        "/images/desktop/other/4.png",
        // добавь сколько нужно
      ],
      name: <span className="text-gradient-welcome">Другие экраны...</span>,
      // description: "Фильтры, детализация, статусы, дополнительные таблицы.",
    },
  ];

  return (
    <div className="container space-y-20">
      {desktopData.map((item, idx) => {
        const isGallery = Array.isArray(item.image);

        return (
          <div key={idx + "desktop"} className={cn(isGallery && "space-y-8")}>
            {/* Визуал */}
            {!isGallery ? (
              <Image
                className="w-[80vw] object-cover h-[47.15rem]"
                src={item.image}
                alt={typeof item.name === "string" ? item.name : "desktop-screen"}
                width={1600}
                height={1200}
              />
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-[80vw] mx-auto">
                {item.image.map((src, i) => (
                  <Image
                    key={`${idx}-other-${i}`}
                    className="w-full h-auto object-cover rounded-3xl"
                    src={src}
                    alt={`desktop-other-${i}`}
                    width={1600}
                    height={1200}
                  />
                ))}
              </div>
            )}

            {/* Текст */}
            {item.name && (
              <p className={cn("text-4xl mt-8 font-bold text-center")}>
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
        );
      })}
    </div>
  );
};

const DataOne = () => {
  return (
    <div className="bg-[#FFFFFF14] h-14 w-fit mx-auto px-10 center text-2xl font-semibold rounded-full mt-8 cursor-pointer ">
      Описания кейса пока нет
    </div>
  );
};
