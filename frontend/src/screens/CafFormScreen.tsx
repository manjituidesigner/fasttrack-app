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
  const [step, setStep] = useState<1 | 2 | 3 | 4 | 5>(1);
  const [multipleUnitsUnderSamePan, setMultipleUnitsUnderSamePan] = useState(false);
  const [projectSameAsBusinessEntity, setProjectSameAsBusinessEntity] = useState(false);
  const [gstApplicable, setGstApplicable] = useState<"yes" | "no">("no");
  const [multipleCityInvolved, setMultipleCityInvolved] = useState<"yes" | "no">("no");
  const [mcLimit, setMcLimit] = useState<"yes" | "no">("no");
  const [mcDistanceKm, setMcDistanceKm] = useState("");
  const [migrationFromFiipToIbdp, setMigrationFromFiipToIbdp] = useState<"yes" | "no">("no");
  const [protectedMonument, setProtectedMonument] = useState<"yes" | "no">("no");
  const [nmaNocAvailable, setNmaNocAvailable] = useState<"yes" | "no">("no");
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
              <Text style={{ fontSize: 18, fontWeight: "800", color: theme.colors.text.primary }}>
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
          <View style={{ paddingTop: 12 }}>
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
                    <Text style={styles.stepText}>Step 2 of 5</Text>
                    <Text style={styles.progressText}>40% Completed</Text>
                  </View>
                  <View style={styles.progressTrack}>
                    <View style={[styles.progressFill, { width: "40%" }]} />
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
                    <Text style={styles.stepText}>Step 3 of 5</Text>
                    <Text style={styles.progressText}>60% Completed</Text>
                  </View>
                  <View style={styles.progressTrack}>
                    <View style={[styles.progressFill, { width: "60%" }]} />
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
                    <Text style={styles.stepText}>Step 4 of 5</Text>
                    <Text style={styles.progressText}>80% Completed</Text>
                  </View>
                  <View style={styles.progressTrack}>
                    <View style={[styles.progressFill, { width: "80%" }]} />
                  </View>
                </View>

                <SectionHeader number="4" title={tt("cafForm.step4.title")} />
                <Card>
                  <Upload label={tt("cafForm.step4.field.certificateIncorporationUpload")} />
                </Card>
              </>
            ) : (
              <>
                <View style={styles.progressWrap}>
                  <View style={styles.progressTop}>
                    <Text style={styles.stepText}>Step 5 of 5</Text>
                    <Text style={styles.progressText}>100% Completed</Text>
                  </View>
                  <View style={styles.progressTrack}>
                    <View style={[styles.progressFill, { width: "100%" }]} />
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
              <Pressable style={styles.backBtn} onPress={() => setStep((s) => (s > 1 ? ((s - 1) as 1 | 2 | 3 | 4 | 5) : 1))}>
                <Text style={styles.backText}>Back</Text>
              </Pressable>
            )}

            <Pressable style={styles.nextBtn} onPress={() => setStep((s) => (s < 5 ? ((s + 1) as 1 | 2 | 3 | 4 | 5) : 5))}>
              <Text style={styles.nextText}>{step === 5 ? "Next" : t("cafForm.action.nextStep")}</Text>
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
  onChangeText
}: {
  label: string;
  value?: string;
  placeholder?: string;
  mono?: boolean;
  multiline?: boolean;
  prefix?: string;
  keyboard?: "default" | "email-address" | "phone-pad" | "numeric";
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
          onChangeText={onChangeText}
          style={[
            styles.input,
            mono ? { fontFamily: "monospace" } : null,
            prefix ? { paddingLeft: 40 } : null,
            multiline ? { height: 80, textAlignVertical: "top" } : null
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
  headerTitle: { fontSize: 18, fontWeight: "800", color: "#2563eb" },
  saveDraft: { color: "#2563eb", fontWeight: "700" },
  avatar: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: "#dbeafe",
    alignItems: "center",
    justifyContent: "center"
  },
  avatarText: { fontWeight: "800", color: "#2563eb" },
  container: { maxWidth: 420, alignSelf: "center", padding: 16 },
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
  progressText: { fontSize: 13, fontWeight: "800", color: "#2563eb" },
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
  pageTitle: { fontSize: 18, fontWeight: "800" },
  subText: { fontSize: 13, color: "#6b7280", marginTop: 4 },
  sectionTitle: { fontSize: 20, fontWeight: "800", marginBottom: 10 },
  sectionHeader: { flexDirection: "row", alignItems: "center", gap: 10, marginBottom: 10 },
  sectionCircle: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: "#dbeafe",
    alignItems: "center",
    justifyContent: "center"
  },
  sectionCircleText: { color: "#2563eb", fontWeight: "800" },
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
    fontWeight: "800",
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
    top: 14,
    fontWeight: "700",
    color: "#6b7280"
  },
  moneyPrefix: {
    position: "absolute",
    left: 12,
    top: 14,
    fontWeight: "700",
    color: "#6b7280",
    zIndex: 1
  },
  input: {
    backgroundColor: "#f9fafb",
    borderWidth: 1,
    borderColor: "#d1d5db",
    borderRadius: 12,
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
  radioRow: { flexDirection: "row", gap: 24, marginTop: 6 },
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
  toggleLabel: { fontSize: 14, fontWeight: "800" },
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
  disabledTitle: { fontSize: 16, fontWeight: "800" },
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
    padding: 16
  },
  bottomGrid: { flexDirection: "row", gap: 16 },
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
  cancelText: { fontWeight: "800", color: "#dc2626" },
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
  nextText: { fontWeight: "800", color: "white" }
} as const;
