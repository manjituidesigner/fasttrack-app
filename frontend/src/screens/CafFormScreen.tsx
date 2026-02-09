import { StatusBar } from "expo-status-bar";
import { Image, Pressable, ScrollView, Switch, Text, TextInput, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialIcons } from "@expo/vector-icons";
import type { ReactNode } from "react";
import Constants from "expo-constants";
import { useState } from "react";
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
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [investment, setInvestment] = useState({
    landCost: "",
    buildingCost: "",
    plantMachineryCost: "",
    fci: "",
    otherCost: "",
    proposedDate: "",
    industryType: "",
    fdiInvolved: false
  });

  const totalProjectCost =
    (Number(investment.landCost || 0) || 0) +
    (Number(investment.buildingCost || 0) || 0) +
    (Number(investment.plantMachineryCost || 0) || 0) +
    (Number(investment.fci || 0) || 0) +
    (Number(investment.otherCost || 0) || 0);

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
                {step === 1 ? t("cafForm.title") : "CAF Application"}
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

        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 160 }}>
          <View style={styles.container}>
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

                <Text style={styles.sectionTitle}>{t("cafForm.section.applicantDetails")}</Text>

                <Card>
                  <View style={styles.profileUpload}>
                    <View style={{ position: "relative" }}>
                      <Image
                        source={{
                          uri: "https://lh3.googleusercontent.com/aida-public/AB6AXuB2oogmzKIX3XrJBsKjb3YbxojaKn4re0jvxm0vkr-2l_4rP_-iTW1TNvbGw-qS5XWddpRmXVYEtp-7Rmo6iA4FQIUebdzBbIkoDRWwmHyRgK23tMMSBkmf0dcZlgv0utNROi0exNH6fwMNhHZ6pjgKh2tdIMEtsvplMjZOBeu0CWe_NZJ4IGSfxuGVsBUucR23uYMuZkrwVkyqnDWJgukW_2tE2EivCtOYXL8d47hmkNGQHLeZdRzP5Q8NSj2Bft8JxLT2z0hLTRk2"
                        }}
                        style={styles.profileImage}
                      />
                      <View style={styles.cameraIcon}>
                        <MaterialIcons name="camera-alt" size={18} color="white" />
                      </View>
                    </View>
                    <Text style={styles.uploadText}>Upload Profile Photo</Text>
                  </View>

                  <Input label={t("cafForm.field.name")} value="Mr. Ajay Kumar" />
                  <Input label={t("cafForm.field.role")} value="Chief Executive Officer" />
                </Card>

                <Card title="Identity Proofs">
                  <Input label={t("cafForm.field.aadhaar")} value="********9123" mono />
                  <DropZone label="Upload Aadhar Card" />

                  <Input label={t("cafForm.field.pan")} value="******567F" mono />
                  <DropZone label="Upload PAN Card" />
                </Card>

                <Card title="Contact Details">
                  <Input label={t("cafForm.field.mobile")} value="7894561235" prefix="+91" keyboard="phone-pad" />
                  <Input label={t("cafForm.field.phone")} placeholder="STD - Number" />
                  <Input label={t("cafForm.field.email")} value="xyz@gmail.com" keyboard="email-address" />
                </Card>

                <Card title={t("cafForm.section.addressDetails")}>
                  <Input label={t("cafForm.field.country")} value={t("cafForm.value.india")} />
                  <TwoCol>
                    <Input label={t("cafForm.field.state")} value={t("cafForm.value.punjab")} />
                    <Input label={t("cafForm.field.district")} value="S.A.S Nagar" />
                    <Input label={t("cafForm.field.tehsil")} value="Mohali" />
                    <Input label={t("cafForm.field.pinCode")} value="123456" />
                  </TwoCol>
                  <Input label={t("cafForm.field.villageTown")} value="Mohali" />
                  <Input label={t("cafForm.field.address")} value="Mohali, Mohali, S.A.S Nagar" multiline />
                </Card>

                <Card title="Documents">
                  <DropZone
                    label={`Click to upload ${t("cafForm.file.authorizationLetter")}`}
                    sub={t("cafForm.file.meta")}
                    large
                  />
                </Card>

                <View style={styles.disabledCard}>
                  <View style={styles.disabledHeader}>
                    <Text style={styles.disabledTitle}>{t("cafForm.section.businessEntityInfo")}</Text>
                    <MaterialIcons name="expand-more" size={22} color="#9ca3af" />
                  </View>
                  <Text style={styles.disabledText}>{t("cafForm.section.businessEntityInfo.sub")}</Text>
                </View>

                <View style={styles.signatureWrap}>
                  <Image
                    source={{
                      uri: "https://lh3.googleusercontent.com/aida-public/AB6AXuCSjEJ1sSEanOxbsMYeQuRBVTMEiJdaTnaDIURIvFI0W8W80WmBdPzLNw_h3IuLdPKwo9IpXfKIPVb9Pl5fsYgUN2soB31hfTknseybnJ51yRmElEFb0sHyZEI42WUZioyOaCDN-GDc5wJfhUj8a0SeFbIP0upt584e-QCJKKL5FEG3Ny_QIuI_N_Vu8YfJp5jNBHdnru-0tsw-5hJXinVECuKeNBdQukCZKVU4kFRqdT-pQU3GKWXJd6ap1Ip_bA5iR7R5FguTg_iA"
                    }}
                    style={styles.signature}
                  />
                  <Text style={styles.signatureLabel}>{t("cafForm.signature.authorizedSignatory")}</Text>
                </View>
              </>
            ) : step === 2 ? (
              <>
                <View style={styles.progressCard}>
                  <View style={styles.progressTop}>
                    <Text style={styles.stepText}>Step 2 of 5</Text>
                    <Text style={styles.progressText}>40% Completed</Text>
                  </View>
                  <View style={styles.progressTrack}>
                    <View style={[styles.progressFill, { width: "40%" }]} />
                  </View>
                  <Text style={styles.pageTitle}>Business Entity & Project Details</Text>
                  <Text style={styles.subText}>Fill in the details below to proceed with your application.</Text>
                </View>

                <SectionHeader number="2" title="Business Entity Information" />
                <Card>
                  <Input label="2.1 Business Entity Name" />
                  <Input label="2.2 Business Entity Type" placeholder="Select" />

                  <TwoCol>
                    <Input label="2.3 Country" value="India" />
                    <Input label="2.4 State" value="Punjab" />
                  </TwoCol>

                  <TwoCol>
                    <Input label="2.5 District" />
                    <Input label="2.6 Tehsil" />
                  </TwoCol>

                  <Input label="2.8 Business Entity Address" multiline />

                  <Input label="2.11 Company PAN" placeholder="ABCDE1234F" mono />

                  <Upload label="2.12 Company PAN Attachment" />
                  <Upload label="2.13 Certificate / MoA / Partnership Deed" />
                </Card>

                <SectionHeader number="3" title="Project Details" />
                <Card>
                  <Input label="3.1 Project Name" />
                  <Input label="3.2 Project Purpose" />
                  <Input label="3.3 Project Type" placeholder="Select" />
                  <Input label="3.4 Sector" placeholder="Select" />

                  <TwoCol>
                    <Input label="3.5 State" value="Punjab" />
                    <Input label="3.6 District" />
                  </TwoCol>

                  <TwoCol>
                    <Input label="3.7 Tehsil" />
                    <Input label="3.8 City / Village" />
                  </TwoCol>

                  <View style={styles.checkboxRow}>
                    <Switch />
                    <Text style={styles.checkboxText}>Multiple City/Town/Village Involved</Text>
                  </View>

                  <Input label="3.9 Project Address" multiline />
                  <Input label="3.11 Pincode" keyboard="numeric" />

                  <View style={styles.radioBlock}>
                    <Text style={styles.label}>Does this site lies under MC Limit?</Text>
                    <View style={styles.radioRow}>
                      <Radio label="Yes" />
                      <Radio label="No" checked />
                    </View>
                  </View>

                  <Input label="Type of Lease Deed" placeholder="Select" />

                  <Upload label="Copy of Registry / Allotment Letter" />
                  <Upload label="Detailed Project Report" />
                </Card>
              </>
            ) : (
              <>
                <View style={styles.progressCard}>
                  <View style={styles.progressTop}>
                    <Text style={styles.stepText}>Step 3 of 9</Text>
                    <Text style={styles.progressText}>3/9 Completed</Text>
                  </View>
                  <View style={styles.progressTrack}>
                    <View style={[styles.progressFill, { width: "33%" }]} />
                  </View>
                  <Text style={styles.pageTitle}>Investment Details</Text>
                  <Text style={styles.subText}>Provide the cost breakdown and project timeline details.</Text>
                </View>

                <SectionHeader number="6" title="Investment Details" />
                <Card>
                  <TwoCol>
                    <MoneyInput
                      label="6.1 Land Cost"
                      value={investment.landCost}
                      onChangeText={(v) => setInvestment((s) => ({ ...s, landCost: v }))}
                    />
                    <MoneyInput
                      label="6.2 Building Cost"
                      value={investment.buildingCost}
                      onChangeText={(v) => setInvestment((s) => ({ ...s, buildingCost: v }))}
                    />
                  </TwoCol>

                  <MoneyInput
                    label="6.3 Plant and Machinery Cost"
                    value={investment.plantMachineryCost}
                    onChangeText={(v) => setInvestment((s) => ({ ...s, plantMachineryCost: v }))}
                  />

                  <TwoCol>
                    <MoneyInput
                      label="6.4 FCI"
                      value={investment.fci}
                      onChangeText={(v) => setInvestment((s) => ({ ...s, fci: v }))}
                    />
                    <MoneyInput
                      label="6.5 Other Cost"
                      value={investment.otherCost}
                      onChangeText={(v) => setInvestment((s) => ({ ...s, otherCost: v }))}
                    />
                  </TwoCol>

                  <MoneyInput label="6.6 Total Project Cost" value={String(totalProjectCost)} readOnly helper="Auto-calculated based on inputs above" />

                  <Input
                    label="6.7 Proposed Date of Commercial Production"
                    value={investment.proposedDate}
                    placeholder="YYYY-MM-DD"
                    keyboard="default"
                    onChangeText={(v) => setInvestment((s) => ({ ...s, proposedDate: v }))}
                  />
                </Card>

                <SectionHeader number="6.8" title="Type of Industry" />
                <Card>
                  <Input
                    label="6.8.1 Type of Industry"
                    value={investment.industryType}
                    placeholder="Select Industry Category"
                    onChangeText={(v) => setInvestment((s) => ({ ...s, industryType: v }))}
                  />

                  <View style={styles.toggleCard}>
                    <View style={styles.toggleTop}>
                      <Text style={styles.toggleLabel}>Is FDI Involved?</Text>
                      <Switch
                        value={investment.fdiInvolved}
                        onValueChange={(v) => setInvestment((s) => ({ ...s, fdiInvolved: v }))}
                      />
                    </View>
                    <Text style={styles.toggleHelp}>Toggle if Foreign Direct Investment is involved in this project.</Text>
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
              <Pressable style={styles.backBtn} onPress={() => setStep((s) => (s > 1 ? ((s - 1) as 1 | 2 | 3) : 1))}>
                <Text style={styles.backText}>Back</Text>
              </Pressable>
            )}

            <Pressable style={styles.nextBtn} onPress={() => setStep((s) => (s < 3 ? ((s + 1) as 1 | 2 | 3) : 3))}>
              <Text style={styles.nextText}>{step === 3 ? "Next" : t("cafForm.action.nextStep")}</Text>
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

function Radio({ label, checked }: { label: string; checked?: boolean }) {
  return (
    <View style={styles.radio}>
      <View style={[styles.radioOuter, checked ? styles.radioOuterActive : null]}>
        {checked ? <View style={styles.radioInner} /> : null}
      </View>
      <Text>{label}</Text>
    </View>
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
