import { StatusBar } from "expo-status-bar";
import { Image, Pressable, ScrollView, Switch, Text, TextInput, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialIcons } from "@expo/vector-icons";
import type { ReactNode } from "react";
import Constants from "expo-constants";
import { useState, useEffect, useRef } from "react";
import { useTheme } from "../theme/useTheme";
import { useI18n } from "../i18n/I18nProvider";
import { BlurView } from "expo-blur";
import { AppHeader } from "../components/AppHeader";

type Props = {
  onBack?: () => void;
  onOpenDrawer?: () => void;
};

export function CafFormScreen({ onBack, onOpenDrawer }: Props) {
  const theme = useTheme();
  const { t } = useI18n();
  const tt = t as any;
  const [step, setStep] = useState<1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9>(1);
  const [multipleUnitsUnderSamePan, setMultipleUnitsUnderSamePan] = useState(false);
  const [projectSameAsBusinessEntity, setProjectSameAsBusinessEntity] = useState(false);
  const [gstApplicable, setGstApplicable] = useState<"yes" | "no">("no");
  const [multipleCityInvolved, setMultipleCityInvolved] = useState<"yes" | "no">("no");
  const [mcLimit, setMcLimit] = useState<"yes" | "no">("no");
  const [mcDistanceKm, setMcDistanceKm] = useState("");
  const [migrationFromFiipToIbdp, setMigrationFromFiipToIbdp] = useState<"yes" | "no">("no");
  const [protectedMonument, setProtectedMonument] = useState<"yes" | "no">("no");
  const [nmaNocAvailable, setNmaNocAvailable] = useState<"yes" | "no">("no");
  const [investment6, setInvestment6] = useState({
    landCost: "",
    buildingCost: "",
    plantMachineryCost: "",
    fci: "",
    otherCost: "",
    commercialProduction: "no" as "yes" | "no",
    industryType: ""
  });
  const totalProjectCost6 =
    (Number(investment6.landCost || 0) || 0) +
    (Number(investment6.buildingCost || 0) || 0) +
    (Number(investment6.plantMachineryCost || 0) || 0) +
    (Number(investment6.fci || 0) || 0) +
    (Number(investment6.otherCost || 0) || 0);

  const [phases7, setPhases7] = useState<Array<{ name: string; fci: string; investDate: string; prodDate: string }>>([]);
  const [phaseDraft7, setPhaseDraft7] = useState({ name: "", fci: "", investDate: "", prodDate: "" });
  const [fdiInvolved7, setFdiInvolved7] = useState<"yes" | "no">("no");

  const [employmentDraft8, setEmploymentDraft8] = useState({
    financialYear: "",
    skill: "",
    directMale: "",
    directFemale: "",
    indirectMale: "",
    indirectFemale: ""
  });
  const [employmentEntries8, setEmploymentEntries8] = useState<
    Array<{ financialYear: string; skill: string; directMale: string; directFemale: string; indirectMale: string; indirectFemale: string }>
  >([]);
  const totals8 = employmentEntries8.reduce(
    (acc, e) => {
      acc.directMale += Number(e.directMale || 0) || 0;
      acc.directFemale += Number(e.directFemale || 0) || 0;
      acc.indirectMale += Number(e.indirectMale || 0) || 0;
      acc.indirectFemale += Number(e.indirectFemale || 0) || 0;
      return acc;
    },
    { directMale: 0, directFemale: 0, indirectMale: 0, indirectFemale: 0 }
  );

  const [fiscalIncentive9, setFiscalIncentive9] = useState<"yes" | "no">("no");
  const [croReport9, setCroReport9] = useState<"yes" | "no">("no");
  const scrollRef = useRef<ScrollView | null>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ y: 0, animated: false });
  }, [step]);

  return (
    <>
      <StatusBar style="dark" />

      <LinearGradient colors={theme.colors.background.gradient} style={{ flex: 1 }}>
        <BlurView intensity={40}>
          <AppHeader
            containerStyle={{ borderBottomWidth: 1, borderColor: theme.colors.border.hairline }}
            contentStyle={{ paddingHorizontal: 20 }}
            left={
              <Pressable
                onPress={onBack}
                hitSlop={10}
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: 22,
                  backgroundColor: "rgba(255,255,255,0.6)",
                  alignItems: "center",
                  justifyContent: "center"
                }}
              >
                <MaterialIcons name="arrow-back" size={22} color="#1f2937" />
              </Pressable>
            }
            center={
              <Text style={{ fontSize: 18, fontWeight: "700", color: theme.colors.text.primary }}>
                {t("cafForm.title")}
              </Text>
            }
            right={
              <Pressable
                onPress={onOpenDrawer}
                hitSlop={10}
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: 22,
                  backgroundColor: "rgba(255,255,255,0.6)",
                  alignItems: "center",
                  justifyContent: "center"
                }}
              >
                <MaterialIcons name="menu" size={22} color="#1f2937" />
              </Pressable>
            }
          />
        </BlurView>

        <ScrollView ref={scrollRef} showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 140 }}>
          <View style={[styles.container, { paddingTop: 12, paddingBottom: 20 }]}> 
            {step === 1 ? (
              <>
                <View style={styles.progressWrap}>
                  <View style={styles.progressTop}>
                    <Text style={styles.stepText}>{t("cafForm.progress.step")}</Text>
                    <Text style={styles.progressText}>{t("cafForm.progress.completed")}</Text>
                  </View>
                  <View style={styles.progressTrack}>
                    <View style={styles.progressFill} />
                  </View>
                </View>

                <SectionHeader number="1" title={tt("cafForm.step1.title")} />
                <Card>
                  <Input label={tt("cafForm.step1.field.title")} placeholder={tt("cafForm.common.select")} />
                  <TwoCol>
                    <Input label={tt("cafForm.step1.field.firstName")} />
                    <Input label={tt("cafForm.step1.field.middleName")} />
                    <Input label={tt("cafForm.step1.field.lastName")} />
                  </TwoCol>
                  <Input label={tt("cafForm.step1.field.designation")} />
                  <Input label={tt("cafForm.step1.field.dob")} placeholder={tt("cafForm.common.datePlaceholder")} />

                  <Upload label={tt("cafForm.step1.field.photo")} />
                  <Upload label={tt("cafForm.step1.field.signature")} />

                  <Input label={tt("cafForm.step1.field.aadhaarNo")} mono />
                  <Upload label={tt("cafForm.step1.field.aadhaarUpload")} />

                  <Input label={tt("cafForm.step1.field.panNo")} mono />
                  <Upload label={tt("cafForm.step1.field.panUpload")} />

                  <TwoCol>
                    <Input label={tt("cafForm.step1.field.phone")} keyboard="phone-pad" />
                    <Input label={tt("cafForm.step1.field.fax")} />
                  </TwoCol>

                  <Input label={tt("cafForm.step1.field.mobile")} keyboard="phone-pad" />
                  <Input label={tt("cafForm.step1.field.email")} keyboard="email-address" />

                  <TwoCol>
                    <Input label={tt("cafForm.step1.field.country")} placeholder={tt("cafForm.common.select")} />
                    <Input label={tt("cafForm.step1.field.state")} placeholder={tt("cafForm.common.select")} />
                  </TwoCol>

                  <TwoCol>
                    <Input label={tt("cafForm.step1.field.district")} placeholder={tt("cafForm.common.select")} />
                    <Input label={tt("cafForm.step1.field.tehsil")} placeholder={tt("cafForm.common.select")} />
                  </TwoCol>

                  <Input label={tt("cafForm.step1.field.city")} />
                  <Input label={tt("cafForm.step1.field.address1")} />
                  <Input label={tt("cafForm.step1.field.address2")} />
                  <Input label={tt("cafForm.step1.field.pinCode")} keyboard="numeric" />

                  <Upload label={tt("cafForm.step1.field.authorizationLetter")} />
                </Card>
              </>
            ) : step === 2 ? (
              <>
                <View style={styles.progressWrap}>
                  <View style={styles.progressTop}>
                    <Text style={styles.stepText}>Step 2 of 9</Text>
                    <Text style={styles.progressText}>22% Completed</Text>
                  </View>
                  <View style={styles.progressTrack}>
                    <View style={[styles.progressFill, { width: "22%" }]} />
                  </View>
                </View>

                <SectionHeader number="2" title={tt("cafForm.step2.title")} />
                <Card>
                  <Input label={tt("cafForm.step2.field.entityName")} />
                  <Input label={tt("cafForm.step2.field.entityType")} placeholder={tt("cafForm.common.select")} />

                  <TwoCol>
                    <Input label={tt("cafForm.step2.field.country")} placeholder={tt("cafForm.common.select")} />
                    <Input label={tt("cafForm.step2.field.state")} placeholder={tt("cafForm.common.select")} />
                  </TwoCol>

                  <TwoCol>
                    <Input label={tt("cafForm.step2.field.district")} placeholder={tt("cafForm.common.select")} />
                    <Input label={tt("cafForm.step2.field.tehsil")} placeholder={tt("cafForm.common.select")} />
                  </TwoCol>

                  <Input label={tt("cafForm.step2.field.villageTown")} />
                  <Input label={tt("cafForm.step2.field.address1")} />
                  <Input label={tt("cafForm.step2.field.address2")} />
                  <Input label={tt("cafForm.step2.field.pinCode")} keyboard="numeric" />

                  <View style={styles.checkboxRow}>
                    <Switch value={multipleUnitsUnderSamePan} onValueChange={setMultipleUnitsUnderSamePan} />
                    <Text style={styles.checkboxText}>{tt("cafForm.step2.field.multiUnitsCheckbox")}</Text>
                  </View>

                  <Input label={tt("cafForm.step2.field.companyPan")} placeholder="ABCDE1234F" mono />
                  <Upload label={tt("cafForm.step2.field.companyPanUpload")} />
                  <Input label={tt("cafForm.step2.field.udyamOptional")} />
                </Card>
              </>
            ) : step === 3 ? (
              <>
                <View style={styles.progressWrap}>
                  <View style={styles.progressTop}>
                    <Text style={styles.stepText}>Step 3 of 9</Text>
                    <Text style={styles.progressText}>33% Completed</Text>
                  </View>
                  <View style={styles.progressTrack}>
                    <View style={[styles.progressFill, { width: "33%" }]} />
                  </View>
                </View>

                <SectionHeader number="3" title={tt("cafForm.step3.title")} />
                <Card>
                  <View style={styles.checkboxRow}>
                    <Switch value={projectSameAsBusinessEntity} onValueChange={setProjectSameAsBusinessEntity} />
                    <Text style={styles.checkboxText}>{tt("cafForm.step3.field.sameAsEntity")}</Text>
                  </View>

                  <Input label={tt("cafForm.step3.field.projectName")} />
                  <Input label={tt("cafForm.step3.field.projectPurpose")} />
                  <Input label={tt("cafForm.step3.field.projectType")} placeholder={tt("cafForm.common.select")} />
                  <Input label={tt("cafForm.step3.field.unitLocation")} />

                  <TwoCol>
                    <Input label={tt("cafForm.step3.field.country")} placeholder={tt("cafForm.common.select")} />
                    <Input label={tt("cafForm.step3.field.state")} placeholder={tt("cafForm.common.select")} />
                  </TwoCol>

                  <TwoCol>
                    <Input label={tt("cafForm.step3.field.district")} placeholder={tt("cafForm.common.select")} />
                    <Input label={tt("cafForm.step3.field.tehsil")} placeholder={tt("cafForm.common.select")} />
                  </TwoCol>

                  <Input label={tt("cafForm.step3.field.city")} />
                  <Input label={tt("cafForm.step3.field.address1")} />
                  <Input label={tt("cafForm.step3.field.address2")} />
                  <Input label={tt("cafForm.step3.field.pinCode")} keyboard="numeric" />

                  <View style={styles.radioBlock}>
                    <Text style={styles.label}>{tt("cafForm.step3.field.gstApplicable")}</Text>
                    <View style={styles.radioRow}>
                      <Radio label={tt("cafForm.common.yes")} checked={gstApplicable === "yes"} onPress={() => setGstApplicable("yes")} />
                      <Radio label={tt("cafForm.common.no")} checked={gstApplicable === "no"} onPress={() => setGstApplicable("no")} />
                    </View>
                  </View>
                </Card>
              </>
            ) : step === 4 ? (
              <>
                <View style={styles.progressWrap}>
                  <View style={styles.progressTop}>
                    <Text style={styles.stepText}>Step 4 of 9</Text>
                    <Text style={styles.progressText}>44% Completed</Text>
                  </View>
                  <View style={styles.progressTrack}>
                    <View style={[styles.progressFill, { width: "44%" }]} />
                  </View>
                </View>

                <SectionHeader number="4" title={tt("cafForm.step4.title")} />
                <Card>
                  <Upload label={tt("cafForm.step4.field.certificateIncorporationUpload")} />
                </Card>
              </>
            ) : step === 5 ? (
              <>
                <View style={styles.progressWrap}>
                  <View style={styles.progressTop}>
                    <Text style={styles.stepText}>Step 5 of 9</Text>
                    <Text style={styles.progressText}>56% Completed</Text>
                  </View>
                  <View style={styles.progressTrack}>
                    <View style={[styles.progressFill, { width: "56%" }]} />
                  </View>
                </View>

                <SectionHeader number="5" title={tt("cafForm.step5.title")} />
                <Card>
                  <Input label={tt("cafForm.step5.field.landArea")} keyboard="numeric" />
                  <Input label={tt("cafForm.step5.field.landRegistrationType")} placeholder={tt("cafForm.common.select")} />
                  <Upload label={tt("cafForm.step5.field.landDocumentUpload")} />

                  <View style={styles.radioBlock}>
                    <Text style={styles.label}>{tt("cafForm.step5.field.multipleCityInvolved")}</Text>
                    <View style={styles.radioRow}>
                      <Radio label={tt("cafForm.common.yes")} checked={multipleCityInvolved === "yes"} onPress={() => setMultipleCityInvolved("yes")} />
                      <Radio label={tt("cafForm.common.no")} checked={multipleCityInvolved === "no"} onPress={() => setMultipleCityInvolved("no")} />
                    </View>
                  </View>

                  <View style={styles.radioBlock}>
                    <Text style={styles.label}>{tt("cafForm.step5.field.mcLimit")}</Text>
                    <View style={styles.radioRow}>
                      <Radio label={tt("cafForm.common.yes")} checked={mcLimit === "yes"} onPress={() => setMcLimit("yes")} />
                      <Radio label={tt("cafForm.common.no")} checked={mcLimit === "no"} onPress={() => setMcLimit("no")} />
                    </View>
                  </View>

                  {mcLimit === "no" ? (
                    <Input
                      label={tt("cafForm.step5.field.mcDistanceKm")}
                      value={mcDistanceKm}
                      onChangeText={setMcDistanceKm}
                      keyboard="numeric"
                    />
                  ) : null}

                  <Input label={tt("cafForm.step5.field.sector")} placeholder={tt("cafForm.common.select")} />
                  <Upload label={tt("cafForm.step5.field.dprUpload")} />

                  <View style={styles.radioBlock}>
                    <Text style={styles.label}>{tt("cafForm.step5.field.migrationFromFiipToIbdp")}</Text>
                    <View style={styles.radioRow}>
                      <Radio label={tt("cafForm.common.yes")} checked={migrationFromFiipToIbdp === "yes"} onPress={() => setMigrationFromFiipToIbdp("yes")} />
                      <Radio label={tt("cafForm.common.no")} checked={migrationFromFiipToIbdp === "no"} onPress={() => setMigrationFromFiipToIbdp("no")} />
                    </View>
                  </View>

                  <Input label={tt("cafForm.step5.field.policyChapter")} placeholder={tt("cafForm.common.select")} />

                  <View style={styles.radioBlock}>
                    <Text style={styles.label}>{tt("cafForm.step5.field.protectedMonument")}</Text>
                    <View style={styles.radioRow}>
                      <Radio label={tt("cafForm.common.yes")} checked={protectedMonument === "yes"} onPress={() => setProtectedMonument("yes")} />
                      <Radio label={tt("cafForm.common.no")} checked={protectedMonument === "no"} onPress={() => setProtectedMonument("no")} />
                    </View>
                  </View>

                  <View style={styles.radioBlock}>
                    <Text style={styles.label}>{tt("cafForm.step5.field.nmaNocAvailable")}</Text>
                    <View style={styles.radioRow}>
                      <Radio label={tt("cafForm.common.yes")} checked={nmaNocAvailable === "yes"} onPress={() => setNmaNocAvailable("yes")} />
                      <Radio label={tt("cafForm.common.no")} checked={nmaNocAvailable === "no"} onPress={() => setNmaNocAvailable("no")} />
                    </View>
                  </View>
                </Card>
              </>
            ) : step === 6 ? (
              <>
                <View style={styles.progressWrap}>
                  <View style={styles.progressTop}>
                    <Text style={styles.stepText}>Step 6 of 9</Text>
                    <Text style={styles.progressText}>67% Completed</Text>
                  </View>
                  <View style={styles.progressTrack}>
                    <View style={[styles.progressFill, { width: "67%" }]} />
                  </View>
                </View>

                <SectionHeader number="6" title={tt("cafForm.step6.title")} />
                <Card>
                  <Text style={{ color: "#64748b", fontSize: 12, marginBottom: 10, lineHeight: 16 }}>
                    {tt("cafForm.step6.note")}
                  </Text>

                  <TwoCol>
                    <MoneyInput
                      label={tt("cafForm.step6.field.landCost")}
                      value={investment6.landCost}
                      onChangeText={(v) => setInvestment6((s) => ({ ...s, landCost: v }))}
                    />
                    <MoneyInput
                      label={tt("cafForm.step6.field.buildingCost")}
                      value={investment6.buildingCost}
                      onChangeText={(v) => setInvestment6((s) => ({ ...s, buildingCost: v }))}
                    />
                  </TwoCol>

                  <MoneyInput
                    label={tt("cafForm.step6.field.plantMachineryCost")}
                    value={investment6.plantMachineryCost}
                    onChangeText={(v) => setInvestment6((s) => ({ ...s, plantMachineryCost: v }))}
                  />

                  <TwoCol>
                    <MoneyInput
                      label={tt("cafForm.step6.field.fci")}
                      value={investment6.fci}
                      onChangeText={(v) => setInvestment6((s) => ({ ...s, fci: v }))}
                    />
                    <MoneyInput
                      label={tt("cafForm.step6.field.otherCost")}
                      value={investment6.otherCost}
                      onChangeText={(v) => setInvestment6((s) => ({ ...s, otherCost: v }))}
                    />
                  </TwoCol>

                  <MoneyInput label={tt("cafForm.step6.field.totalProjectCost")} value={String(totalProjectCost6)} readOnly helper={tt("cafForm.step6.field.totalProjectCostHelp")} />

                  <View style={styles.radioBlock}>
                    <Text style={styles.label}>{tt("cafForm.step6.field.commercialProduction")}</Text>
                    <View style={styles.radioRow}>
                      <Radio label={tt("cafForm.common.yes")} checked={investment6.commercialProduction === "yes"} onPress={() => setInvestment6((s) => ({ ...s, commercialProduction: "yes" }))} />
                      <Radio label={tt("cafForm.common.no")} checked={investment6.commercialProduction === "no"} onPress={() => setInvestment6((s) => ({ ...s, commercialProduction: "no" }))} />
                    </View>
                  </View>

                  <Input label={tt("cafForm.step6.field.industryType")} placeholder={tt("cafForm.common.select")} value={investment6.industryType} onChangeText={(v) => setInvestment6((s) => ({ ...s, industryType: v }))} />
                </Card>
              </>
            ) : step === 7 ? (
              <>
                <View style={styles.progressWrap}>
                  <View style={styles.progressTop}>
                    <Text style={styles.stepText}>Step 7 of 9</Text>
                    <Text style={styles.progressText}>78% Completed</Text>
                  </View>
                  <View style={styles.progressTrack}>
                    <View style={[styles.progressFill, { width: "78%" }]} />
                  </View>
                </View>

                <SectionHeader number="7" title={tt("cafForm.step7.title")} />
                <Card>
                  <Input label={tt("cafForm.step7.field.phaseName")} value={phaseDraft7.name} onChangeText={(v) => setPhaseDraft7((s) => ({ ...s, name: v }))} />
                  <MoneyInput label={tt("cafForm.step7.field.fci")} value={phaseDraft7.fci} onChangeText={(v) => setPhaseDraft7((s) => ({ ...s, fci: v }))} />

                  <TwoCol>
                    <Input label={tt("cafForm.step7.field.investDate")} value={phaseDraft7.investDate} onChangeText={(v) => setPhaseDraft7((s) => ({ ...s, investDate: v }))} placeholder={tt("cafForm.common.datePlaceholder")} />
                    <Input label={tt("cafForm.step7.field.productionDate")} value={phaseDraft7.prodDate} onChangeText={(v) => setPhaseDraft7((s) => ({ ...s, prodDate: v }))} placeholder={tt("cafForm.common.datePlaceholder")} />
                  </TwoCol>

                  <Pressable
                    onPress={() => {
                      if (!phaseDraft7.name && !phaseDraft7.fci && !phaseDraft7.investDate && !phaseDraft7.prodDate) return;
                      setPhases7((s) => [...s, phaseDraft7]);
                      setPhaseDraft7({ name: "", fci: "", investDate: "", prodDate: "" });
                    }}
                    style={styles.addBtn}
                  >
                    <Text style={styles.addBtnText}>+Add</Text>
                  </Pressable>

                  {phases7.length ? (
                    <View style={{ marginTop: 10, gap: 10 }}>
                      {phases7.map((p, idx) => (
                        <View key={idx} style={styles.listRow}>
                          <Text style={styles.listRowTitle}>{p.name || `Phase ${idx + 1}`}</Text>
                          <Text style={styles.listRowSub}>{`${tt("cafForm.step7.field.fci")} ${p.fci || "0"}`}</Text>
                        </View>
                      ))}
                    </View>
                  ) : null}

                  <View style={[styles.radioBlock, { marginTop: 12 }]}>
                    <Text style={styles.label}>{tt("cafForm.step7.field.fdiInvolved")}</Text>
                    <View style={styles.radioRow}>
                      <Radio label={tt("cafForm.common.yes")} checked={fdiInvolved7 === "yes"} onPress={() => setFdiInvolved7("yes")} />
                      <Radio label={tt("cafForm.common.no")} checked={fdiInvolved7 === "no"} onPress={() => setFdiInvolved7("no")} />
                    </View>
                  </View>
                </Card>
              </>
            ) : step === 8 ? (
              <>
                <View style={styles.progressWrap}>
                  <View style={styles.progressTop}>
                    <Text style={styles.stepText}>Step 8 of 9</Text>
                    <Text style={styles.progressText}>89% Completed</Text>
                  </View>
                  <View style={styles.progressTrack}>
                    <View style={[styles.progressFill, { width: "89%" }]} />
                  </View>
                </View>

                <SectionHeader number="8" title={tt("cafForm.step8.title")} />
                <Card>
                  <Input label={tt("cafForm.step8.field.financialYear")} value={employmentDraft8.financialYear} onChangeText={(v) => setEmploymentDraft8((s) => ({ ...s, financialYear: v }))} />
                  <Input label={tt("cafForm.step8.field.selectSkill")} placeholder={tt("cafForm.common.select")} value={employmentDraft8.skill} onChangeText={(v) => setEmploymentDraft8((s) => ({ ...s, skill: v }))} />

                  <TwoCol>
                    <Input label={tt("cafForm.step8.field.directMale")} keyboard="numeric" value={employmentDraft8.directMale} onChangeText={(v) => setEmploymentDraft8((s) => ({ ...s, directMale: v }))} />
                    <Input label={tt("cafForm.step8.field.directFemale")} keyboard="numeric" value={employmentDraft8.directFemale} onChangeText={(v) => setEmploymentDraft8((s) => ({ ...s, directFemale: v }))} />
                    <Input label={tt("cafForm.step8.field.indirectMale")} keyboard="numeric" value={employmentDraft8.indirectMale} onChangeText={(v) => setEmploymentDraft8((s) => ({ ...s, indirectMale: v }))} />
                    <Input label={tt("cafForm.step8.field.indirectFemale")} keyboard="numeric" value={employmentDraft8.indirectFemale} onChangeText={(v) => setEmploymentDraft8((s) => ({ ...s, indirectFemale: v }))} />
                  </TwoCol>

                  <Pressable
                    onPress={() => {
                      if (!employmentDraft8.financialYear && !employmentDraft8.skill) return;
                      setEmploymentEntries8((s) => [...s, employmentDraft8]);
                      setEmploymentDraft8({ financialYear: "", skill: "", directMale: "", directFemale: "", indirectMale: "", indirectFemale: "" });
                    }}
                    style={styles.addBtn}
                  >
                    <Text style={styles.addBtnText}>+Add</Text>
                  </Pressable>

                  {employmentEntries8.length ? (
                    <View style={{ marginTop: 10, gap: 10 }}>
                      {employmentEntries8.map((e, idx) => (
                        <View key={idx} style={styles.listRow}>
                          <Text style={styles.listRowTitle}>{e.financialYear || `Row ${idx + 1}`}</Text>
                          <Text style={styles.listRowSub}>{e.skill}</Text>
                        </View>
                      ))}
                    </View>
                  ) : null}

                  <TwoCol>
                    <Input label={tt("cafForm.step8.field.totalDirectMale")} value={String(totals8.directMale)} keyboard="numeric" editable={false} />
                    <Input label={tt("cafForm.step8.field.totalDirectFemale")} value={String(totals8.directFemale)} keyboard="numeric" editable={false} />
                    <Input label={tt("cafForm.step8.field.totalIndirectMale")} value={String(totals8.indirectMale)} keyboard="numeric" editable={false} />
                    <Input label={tt("cafForm.step8.field.totalIndirectFemale")} value={String(totals8.indirectFemale)} keyboard="numeric" editable={false} />
                  </TwoCol>

                  <TwoCol>
                    <Input label={tt("cafForm.step8.field.totalMale")} value={String(totals8.directMale + totals8.indirectMale)} keyboard="numeric" editable={false} />
                    <Input label={tt("cafForm.step8.field.totalFemale")} value={String(totals8.directFemale + totals8.indirectFemale)} keyboard="numeric" editable={false} />
                  </TwoCol>
                </Card>
              </>
            ) : (
              <>
                <View style={styles.progressWrap}>
                  <View style={styles.progressTop}>
                    <Text style={styles.stepText}>Step 9 of 9</Text>
                    <Text style={styles.progressText}>100% Completed</Text>
                  </View>
                  <View style={styles.progressTrack}>
                    <View style={[styles.progressFill, { width: "100%" }]} />
                  </View>
                </View>

                <SectionHeader number="9" title={tt("cafForm.step9.title")} />
                <Card>
                  <Input label={tt("cafForm.step9.field.regulatoryClearance")} />

                  <View style={styles.radioBlock}>
                    <Text style={styles.label}>{tt("cafForm.step9.field.fiscalIncentive")}</Text>
                    <View style={styles.radioRow}>
                      <Radio label={tt("cafForm.common.yes")} checked={fiscalIncentive9 === "yes"} onPress={() => setFiscalIncentive9("yes")} />
                      <Radio label={tt("cafForm.common.no")} checked={fiscalIncentive9 === "no"} onPress={() => setFiscalIncentive9("no")} />
                    </View>
                  </View>

                  <View style={styles.radioBlock}>
                    <Text style={styles.label}>{tt("cafForm.step9.field.croReport")}</Text>
                    <View style={styles.radioRow}>
                      <Radio label={tt("cafForm.common.yes")} checked={croReport9 === "yes"} onPress={() => setCroReport9("yes")} />
                      <Radio label={tt("cafForm.common.no")} checked={croReport9 === "no"} onPress={() => setCroReport9("no")} />
                    </View>
                  </View>
                </Card>
              </>
            )}
          </View>
        </ScrollView>

        <View style={styles.bottomBar}>
          <View style={styles.bottomGrid}>
            {step === 1 ? (
              <Pressable style={styles.cancelBtn} onPress={onBack}>
                <MaterialIcons name="close" size={18} color="#dc2626" />
                <Text style={styles.cancelText}>{t("cafForm.action.cancel")}</Text>
              </Pressable>
            ) : (
              <Pressable style={styles.backBtn} onPress={() => setStep((s) => (s > 1 ? ((s - 1) as 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9) : 1))}>
                <Text style={styles.backText}>Back</Text>
              </Pressable>
            )}

            <Pressable style={styles.nextBtn} onPress={() => setStep((s) => (s < 9 ? ((s + 1) as 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9) : 9))}>
              <Text style={styles.nextText}>{step === 9 ? "Next" : t("cafForm.action.nextStep")}</Text>
              <MaterialIcons name="arrow-forward" size={18} color="white" />
            </Pressable>
          </View>
        </View>
      </LinearGradient>
    </>
  );
}

function Card({ children, title }: { children: ReactNode; title?: string }) {
  return (
    <View style={styles.card}>
      {title ? <Text style={styles.cardTitle}>{title}</Text> : null}
      {children}
    </View>
  );
}

function SectionHeader({ number, title }: { number: string; title: string }) {
  return (
    <View style={styles.sectionHeader}>
      <View style={styles.sectionCircle}>
        <Text style={styles.sectionCircleText}>{number}</Text>
      </View>
      <Text style={styles.sectionHeaderTitle}>{title}</Text>
    </View>
  );
}

function Input({
  label,
  value,
  placeholder,
  mono,
  multiline,
  prefix,
  keyboard,
  editable,
  onChangeText
}: {
  label: string;
  value?: string;
  placeholder?: string;
  mono?: boolean;
  multiline?: boolean;
  prefix?: string;
  keyboard?: "default" | "email-address" | "phone-pad" | "numeric";
  editable?: boolean;
  onChangeText?: (text: string) => void;
}) {
  return (
    <View style={{ marginBottom: 12, flex: 1, minWidth: 160 }}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.inputWrap}>
        {prefix ? <Text style={styles.prefix}>{prefix}</Text> : null}
        <TextInput
          value={value}
          placeholder={placeholder}
          keyboardType={keyboard}
          multiline={multiline}
          editable={editable ?? true}
          onChangeText={onChangeText}
          style={[
            styles.input,
            mono ? { fontFamily: "monospace" } : null,
            prefix ? { paddingLeft: 40 } : null,
            multiline ? { height: 90, textAlignVertical: "top" } : null
          ]}
        />
      </View>
    </View>
  );
}

function MoneyInput({
  label,
  value,
  onChangeText,
  readOnly,
  helper
}: {
  label: string;
  value?: string;
  onChangeText?: (text: string) => void;
  readOnly?: boolean;
  helper?: string;
}) {
  return (
    <View style={{ marginBottom: 12, flex: 1, minWidth: 160 }}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.moneyInputWrap}>
        <Text style={styles.moneyPrefix}>₹</Text>
        <TextInput
          value={value}
          editable={!readOnly}
          keyboardType="numeric"
          placeholder="0"
          onChangeText={onChangeText}
          style={[styles.input, styles.moneyInput, readOnly ? styles.readOnlyInput : null]}
        />
      </View>
      {helper ? <Text style={styles.helperText}>{helper}</Text> : null}
    </View>
  );
}

function DropZone({ label, sub, large }: { label: string; sub?: string; large?: boolean }) {
  return (
    <Pressable style={[styles.dropZone, large ? { paddingVertical: 28 } : null]}>
      <View style={styles.dropIcon}>
        <MaterialIcons name="upload-file" size={26} color="#2563eb" />
      </View>
      <Text style={styles.dropText}>{label}</Text>
      {sub ? <Text style={styles.dropSub}>{sub}</Text> : null}
    </Pressable>
  );
}

function Upload({ label }: { label: string }) {
  return (
    <Pressable style={styles.upload}>
      <MaterialIcons name="cloud-upload" size={30} color="#9ca3af" />
      <Text style={styles.uploadText2}>{label}</Text>
      <Text style={styles.uploadSub}>PDF, JPG up to 5MB</Text>
    </Pressable>
  );
}

function TwoCol({ children }: { children: ReactNode }) {
  return <View style={styles.twoCol}>{children}</View>;
}

function Radio({ label, checked, onPress }: { label: string; checked?: boolean; onPress?: () => void }) {
  return (
    <Pressable onPress={onPress} style={styles.radio}>
      <View style={[styles.radioOuter, checked ? styles.radioOuterActive : null]}>
        {checked ? <View style={styles.radioInner} /> : null}
      </View>
      <Text>{label}</Text>
    </Pressable>
  );
}

const styles = {
  header: {
    height: 64 + (Constants.statusBarHeight ?? 0),
    paddingTop: Constants.statusBarHeight ?? 0,
    paddingHorizontal: 16,
    backgroundColor: "#ffffff",
    borderBottomWidth: 1,
    borderColor: "#e5e7eb",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  headerLeft: { flexDirection: "row", alignItems: "center", gap: 8 },
  headerTitle: { fontSize: 18, fontWeight: "700", color: "#2563eb" },
  saveDraft: { color: "#2563eb", fontWeight: "700" },
  avatar: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: "#dbeafe",
    alignItems: "center",
    justifyContent: "center"
  },
  avatarText: { fontWeight: "700", color: "#2563eb" },
  container: { maxWidth: 420, width: "100%", alignSelf: "center", paddingHorizontal: 20 },
  progressWrap: { marginBottom: 24 },
  progressCard: {
    backgroundColor: "#ffffff",
    padding: 16,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "#e5e7eb",
    marginBottom: 20
  },
  progressTop: { flexDirection: "row", justifyContent: "space-between" },
  stepText: { fontSize: 11, fontWeight: "700", color: "#6b7280" },
  progressText: { fontSize: 13, fontWeight: "700", color: "#2563eb" },
  progressTrack: {
    height: 10,
    backgroundColor: "#e5e7eb",
    borderRadius: 999,
    marginTop: 6
  },
  progressFill: {
    width: "20%",
    height: "100%",
    backgroundColor: "#2563eb",
    borderRadius: 999
  },
  pageTitle: { fontSize: 18, fontWeight: "700" },
  subText: { fontSize: 13, color: "#6b7280", marginTop: 4 },
  sectionTitle: { fontSize: 20, fontWeight: "700", marginBottom: 10 },
  sectionHeader: { flexDirection: "row", alignItems: "center", gap: 10, marginBottom: 10 },
  sectionCircle: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: "#dbeafe",
    alignItems: "center",
    justifyContent: "center"
  },
  sectionCircleText: { color: "#2563eb", fontWeight: "700" },
  sectionHeaderTitle: { fontSize: 18, fontWeight: "700" },
  card: {
    backgroundColor: "#ffffff",
    borderRadius: 16,
    padding: 16,
    borderWidth: 1,
    borderColor: "#e5e7eb",
    marginBottom: 16
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#2563eb",
    marginBottom: 12,
    borderBottomWidth: 1,
    borderColor: "#e5e7eb",
    paddingBottom: 6
  },
  profileUpload: {
    alignItems: "center",
    paddingBottom: 16,
    borderBottomWidth: 1,
    borderColor: "#e5e7eb",
    marginBottom: 16
  },
  profileImage: {
    width: 96,
    height: 96,
    borderRadius: 48,
    borderWidth: 4,
    borderColor: "#ffffff"
  },
  cameraIcon: {
    position: "absolute",
    bottom: 0,
    right: 0,
    backgroundColor: "#2563eb",
    width: 32,
    height: 32,
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "center"
  },
  uploadText: { marginTop: 8, fontWeight: "700", color: "#2563eb" },
  label: { fontSize: 14, fontWeight: "700", marginBottom: 6 },
  inputWrap: { position: "relative" },
  moneyInputWrap: { position: "relative" },
  prefix: {
    position: "absolute",
    left: 12,
    top: 15,
    fontWeight: "700",
    color: "#6b7280"
  },
  moneyPrefix: {
    position: "absolute",
    left: 12,
    top: 15,
    fontWeight: "700",
    color: "#6b7280",
    zIndex: 1
  },
  input: {
    backgroundColor: "#ffffff",
    borderWidth: 1,
    borderColor: "#cbd5e1",
    borderRadius: 50,
    height: 50,
    paddingVertical: 12,
    paddingHorizontal: 14,
    fontSize: 16
  },
  moneyInput: { paddingLeft: 28 },
  readOnlyInput: { backgroundColor: "#f3f4f6", color: "#374151" },
  helperText: { fontSize: 12, color: "#6b7280", marginTop: 6 },
  dropZone: {
    borderWidth: 2,
    borderStyle: "dashed",
    borderColor: "#d1d5db",
    borderRadius: 14,
    paddingVertical: 18,
    alignItems: "center",
    marginBottom: 16,
    backgroundColor: "#f9fafb"
  },
  dropIcon: {
    backgroundColor: "#dbeafe",
    width: 44,
    height: 44,
    borderRadius: 22,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 8
  },
  dropText: { fontWeight: "700" },
  dropSub: { fontSize: 12, color: "#6b7280", marginTop: 4 },
  twoCol: { flexDirection: "row", flexWrap: "wrap", gap: 12 },
  upload: {
    borderWidth: 2,
    borderStyle: "dashed",
    borderColor: "#d1d5db",
    borderRadius: 14,
    padding: 20,
    alignItems: "center",
    marginBottom: 12,
    backgroundColor: "#f9fafb"
  },
  uploadText2: { fontWeight: "700", marginTop: 6 },
  uploadSub: { fontSize: 12, color: "#6b7280" },
  checkboxRow: { flexDirection: "row", alignItems: "center", gap: 10, marginBottom: 12 },
  checkboxText: { fontSize: 14 },
  radioBlock: { marginBottom: 12 },
  radioRow: {
    flexDirection: "row",
    gap: 18,
    marginTop: 8,
    flexWrap: "wrap"
  },
  addBtn: {
    alignSelf: "flex-start",
    backgroundColor: "#2563eb",
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 4
  },
  addBtnText: {
    color: "#ffffff",
    fontWeight: "700",
    fontSize: 13
  },
  listRow: {
    backgroundColor: "rgba(255,255,255,0.7)",
    borderWidth: 1,
    borderColor: "#e2e8f0",
    borderRadius: 12,
    padding: 12
  },
  listRowTitle: {
    fontSize: 13,
    fontWeight: "700",
    color: "#0f172a"
  },
  listRowSub: {
    fontSize: 12,
    color: "#475569",
    marginTop: 2
  },
  radio: { flexDirection: "row", alignItems: "center", gap: 6 },
  radioOuter: {
    width: 18,
    height: 18,
    borderRadius: 9,
    borderWidth: 2,
    borderColor: "#9ca3af",
    alignItems: "center",
    justifyContent: "center"
  },
  radioOuterActive: { borderColor: "#2563eb" },
  radioInner: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#2563eb"
  },
  toggleCard: {
    backgroundColor: "#f9fafb",
    borderWidth: 1,
    borderColor: "#e5e7eb",
    borderRadius: 14,
    padding: 14
  },
  toggleTop: { flexDirection: "row", alignItems: "center", justifyContent: "space-between" },
  toggleLabel: { fontSize: 14, fontWeight: "700" },
  toggleHelp: { fontSize: 12, color: "#6b7280", marginTop: 6 },
  disabledCard: {
    opacity: 0.6,
    backgroundColor: "#ffffff",
    borderRadius: 16,
    padding: 16,
    borderWidth: 1,
    borderColor: "#e5e7eb",
    marginBottom: 40
  },
  disabledHeader: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  disabledTitle: { fontSize: 16, fontWeight: "700" },
  disabledText: { fontSize: 12, color: "#6b7280", marginTop: 4 },
  signatureWrap: { alignItems: "flex-end", marginBottom: 32 },
  signature: { width: 120, height: 40, resizeMode: "contain" },
  signatureLabel: {
    fontSize: 11,
    color: "#6b7280",
    borderTopWidth: 1,
    borderColor: "#d1d5db",
    paddingTop: 4
  },
  bottomBar: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    backgroundColor: "#ffffff",
    borderTopWidth: 1,
    borderColor: "#e5e7eb",
    paddingVertical: 16,
    paddingHorizontal: 20
  },
  bottomGrid: { flexDirection: "row", gap: 16, maxWidth: 420, width: "100%", alignSelf: "center" },
  backBtn: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#d1d5db",
    paddingVertical: 14,
    borderRadius: 14,
    alignItems: "center",
    justifyContent: "center"
  },
  backText: { fontWeight: "700" },
  cancelBtn: {
    flex: 1,
    flexDirection: "row",
    gap: 6,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 14,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: "#fecaca"
  },
  cancelText: { fontWeight: "700", color: "#dc2626" },
  nextBtn: {
    flex: 1,
    flexDirection: "row",
    gap: 6,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 14,
    borderRadius: 14,
    backgroundColor: "#2563eb"
  },
  nextText: { fontWeight: "700", color: "white" }
} as const;
