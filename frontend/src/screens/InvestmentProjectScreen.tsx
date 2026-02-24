import React, { useState } from "react";
import { View, Text, ScrollView, Pressable, SafeAreaView } from "react-native";
import { BlurView } from "expo-blur";
import { MaterialIcons } from "@expo/vector-icons";
import { AppHeader } from "../components/AppHeader";
import { useI18n } from "../i18n/I18nProvider";

type Props = {
  onBack?: () => void;
  onOpenDrawer?: () => void;
};

export function InvestmentProjectScreen({ onBack, onOpenDrawer }: Props) {
  const { t } = useI18n();
  const [showRTBA, setShowRTBA] = useState(true);
  const [msme, setMsme] = useState<"yes" | "no" | null>(null);

  return (
    <SafeAreaView className="flex-1 bg-white">
      <BlurView intensity={40} style={{ zIndex: 50, elevation: 50 }}>
        <AppHeader
          containerStyle={{ borderBottomWidth: 1, borderColor: "rgba(226,232,240,0.9)" }}
          contentStyle={{ paddingHorizontal: 16 }}
          left={
            <Pressable
              onPress={onBack}
              hitSlop={10}
              style={{
                width: 44,
                height: 44,
                borderRadius: 22,
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              <MaterialIcons name="chevron-left" size={28} color="#2563eb" />
            </Pressable>
          }
          center={<Text style={{ fontSize: 18, fontWeight: "700", color: "#0f172a" }}>{t("investmentProject.title")}</Text>}
          right={
            <Pressable
              onPress={onOpenDrawer}
              hitSlop={10}
              style={{ width: 44, height: 44, borderRadius: 22, alignItems: "center", justifyContent: "center" }}
            >
              <MaterialIcons name="menu" size={24} color="#2563eb" />
            </Pressable>
          }
        />
      </BlurView>

      <ScrollView
        className="flex-1 px-4 pt-4"
        contentContainerStyle={{ paddingBottom: 120 }}
        showsVerticalScrollIndicator={false}
      >
        <View className="bg-white rounded-2xl border border-slate-100 overflow-hidden mb-6 shadow-sm">
          <View className="bg-primary p-4">
            <Text className="text-white text-xl font-bold text-center">{t("investmentProject.welcome")}</Text>
          </View>

          <View className="p-5 space-y-4">
            <Text className="text-primary font-bold text-lg">{t("investmentProject.greetings")}</Text>

            <Text className="text-sm leading-relaxed text-slate-600">
              {t("investmentProject.thankYouPrefix")}
              <Text className="font-bold text-slate-900">{t("investmentProject.punjab")}</Text>
              {t("investmentProject.thankYouSuffix")} {t("investmentProject.enterprisePrefix")}
              <Text className="font-bold"> {t("investmentProject.msme")} </Text>
              {t("investmentProject.enterpriseOr")}
              <Text className="font-bold"> {t("investmentProject.largeEnterprise")} </Text>
              {t("investmentProject.enterpriseSuffix")}
            </Text>

            {[
              {
                icon: "description" as const,
                title: t("investmentProject.card.rtba.title"),
                desc: t("investmentProject.card.rtba.desc")
              },
              {
                icon: "verified" as const,
                title: t("investmentProject.card.greenStamp.title"),
                desc: t("investmentProject.card.greenStamp.desc")
              },
              {
                icon: "assignment" as const,
                title: t("investmentProject.card.singleWindow.title"),
                desc: t("investmentProject.card.singleWindow.desc")
              },
              {
                icon: "settings-applications" as const,
                title: t("investmentProject.card.serviceCaf.title"),
                desc: t("investmentProject.card.serviceCaf.desc")
              }
            ].map((item, index) => (
              <Pressable key={index} className="flex-row items-start gap-3">
                <MaterialIcons name={item.icon} size={22} color="#2563eb" />
                <View className="flex-1">
                  <Text className="text-sm font-semibold text-primary">{item.title}</Text>
                  <Text className="text-xs text-slate-500 italic">{item.desc}</Text>
                </View>
              </Pressable>
            ))}
          </View>
        </View>

        <View className="bg-blue-50 border border-blue-100 p-5 rounded-2xl mb-6 shadow-sm">
          <Text className="text-sm text-slate-700 font-medium leading-relaxed">
            {t("investmentProject.msmeLandNote")}
          </Text>

          <Text className="text-xs text-slate-500 mt-2">
            {t("investmentProject.msmeLandNoteSub")}
          </Text>
        </View>

        <View className="border border-slate-200 rounded-2xl bg-white overflow-hidden mb-6 shadow-sm">
          <Pressable
            onPress={() => setShowRTBA(!showRTBA)}
            className="px-5 py-4 flex-row items-center justify-between bg-slate-50"
          >
            <Text className="text-sm font-semibold">{t("investmentProject.section.rtbaClearances")}</Text>
            <MaterialIcons name={showRTBA ? "expand-less" : "expand-more"} size={22} color="#94a3b8" />
          </Pressable>

          {showRTBA && (
            <View className="p-4 space-y-4">
              <View className="p-4 rounded-xl bg-slate-50/50 border border-slate-100">
                <View className="flex-row items-center justify-between mb-2">
                  <View className="px-2 py-0.5 rounded bg-slate-200">
                    <Text className="text-[10px] font-bold uppercase">{t("investmentProject.item")} 1</Text>
                  </View>
                </View>

                <Text className="text-[10px] font-bold uppercase text-slate-400 mb-1">{t("investmentProject.field.department")}</Text>
                <Text className="text-sm font-semibold mb-3">{t("investmentProject.item1.departmentValue")}</Text>

                <Text className="text-[10px] font-bold uppercase text-slate-400 mb-1">{t("investmentProject.field.act")}</Text>
                <Text className="text-sm mb-3">{t("investmentProject.item1.actValue")}</Text>

                <Text className="text-[10px] font-bold uppercase text-slate-400 mb-1">{t("investmentProject.field.services")}</Text>
                <View className="space-y-1">
                  {[
                    t("investmentProject.item1.service1"),
                    t("investmentProject.item1.service2"),
                    t("investmentProject.item1.service3")
                  ].map((s) => (
                    <View key={s} className="flex-row items-start gap-2">
                      <Text className="text-slate-500">•</Text>
                      <Text className="text-sm text-slate-600 flex-1">{s}</Text>
                    </View>
                  ))}
                </View>
              </View>

              <View className="p-4 rounded-xl bg-slate-50/50 border border-slate-100">
                <View className="flex-row items-center justify-between mb-2">
                  <View className="px-2 py-0.5 rounded bg-slate-200">
                    <Text className="text-[10px] font-bold uppercase">{t("investmentProject.item")} 2</Text>
                  </View>
                </View>

                <Text className="text-[10px] font-bold uppercase text-slate-400 mb-1">{t("investmentProject.field.department")}</Text>
                <Text className="text-sm font-semibold mb-3">{t("investmentProject.item2.departmentValue")}</Text>

                <Text className="text-[10px] font-bold uppercase text-slate-400 mb-1">{t("investmentProject.field.act")}</Text>
                <Text className="text-sm mb-3">{t("investmentProject.item2.actValue")}</Text>

                <Text className="text-[10px] font-bold uppercase text-slate-400 mb-1">{t("investmentProject.field.services")}</Text>
                <View className="space-y-1">
                  {[t("investmentProject.item2.service1"), t("investmentProject.item2.service2")].map((s) => (
                    <View key={s} className="flex-row items-start gap-2">
                      <Text className="text-slate-500">•</Text>
                      <Text className="text-sm text-slate-600 flex-1">{s}</Text>
                    </View>
                  ))}
                </View>
              </View>

              <View className="items-end">
                <Pressable className="flex-row items-center gap-1">
                  <Text className="text-primary text-xs font-medium">{t("investmentProject.readFullRtba")}</Text>
                  <MaterialIcons name="open-in-new" size={14} color="#2563eb" />
                </Pressable>
              </View>
            </View>
          )}
        </View>

        <View className="bg-white rounded-2xl border border-slate-100 overflow-hidden shadow-sm">
          <View className="px-5 py-4 border-b border-slate-100 flex-row items-center gap-2">
            <Text className="text-sm font-semibold flex-1">{t("investmentProject.msmeQuestion")}</Text>
            <MaterialIcons name="info-outline" size={18} color="#94a3b8" />
          </View>

          <View className="p-5 flex-row gap-10">
            <Pressable onPress={() => setMsme("yes")} className="flex-row items-center gap-3">
              <View
                className={`w-5 h-5 rounded-full border ${msme === "yes" ? "border-primary bg-primary" : "border-slate-300"}`}
              />
              <Text className="text-sm font-medium">{t("investmentProject.yes")}</Text>
            </Pressable>

            <Pressable onPress={() => setMsme("no")} className="flex-row items-center gap-3">
              <View
                className={`w-5 h-5 rounded-full border ${msme === "no" ? "border-primary bg-primary" : "border-slate-300"}`}
              />
              <Text className="text-sm font-medium">{t("investmentProject.no")}</Text>
            </Pressable>
          </View>
        </View>
      </ScrollView>

      <View className="absolute bottom-0 left-0 right-0 p-4 bg-white/80 border-t border-slate-200">
        <Pressable className="w-full bg-primary py-3.5 rounded-xl items-center active:scale-[0.98] shadow-lg shadow-blue-500/20">
          <Text className="text-white font-bold text-base">{t("investmentProject.proceed")}</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}
