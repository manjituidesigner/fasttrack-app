import { StatusBar } from "expo-status-bar";
import { Image, Pressable, ScrollView, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialIcons } from "@expo/vector-icons";
import { useTheme } from "../theme/useTheme";
import { useI18n } from "../i18n/I18nProvider";

type Props = {
  onBack?: () => void;
};

export function CafFormScreen({ onBack }: Props) {
  const theme = useTheme();
  const { t } = useI18n();

  return (
    <>
      <StatusBar style="dark" />

      <LinearGradient colors={theme.colors.background.gradient} style={{ flex: 1 }}>
        <View style={styles.header}>
          <View style={{ flexDirection: "row", alignItems: "center", gap: 8 }}>
            <Pressable onPress={onBack} hitSlop={10}>
              <MaterialIcons name="arrow-back-ios" size={20} color="#6b7280" />
            </Pressable>
            <Text style={styles.headerTitle}>{t("cafForm.title")}</Text>
          </View>

          <View style={styles.avatarCircle}>
            <Text style={{ fontWeight: "800", color: "#2563eb" }}>AK</Text>
          </View>
        </View>

        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 140 }}>
          <View style={styles.container}>
            <View style={{ marginBottom: 24 }}>
              <View style={styles.progressTop}>
                <Text style={styles.stepText}>{t("cafForm.progress.step")}</Text>
                <Text style={styles.progressText}>{t("cafForm.progress.completed")}</Text>
              </View>
              <View style={styles.progressTrack}>
                <View style={styles.progressFill} />
              </View>
            </View>

            <View style={{ marginBottom: 32 }}>
              <View style={styles.sectionTitleRow}>
                <Text style={styles.sectionTitle}>{t("cafForm.section.applicantDetails")}</Text>
                <View style={styles.verifiedBadge}>
                  <Text style={styles.verifiedText}>{t("cafForm.badge.verified")}</Text>
                </View>
              </View>

              <View style={styles.card}>
                <View style={styles.decorCircle} />

                <View style={styles.profileRow}>
                  <View>
                    <Image
                      source={{
                        uri: "https://lh3.googleusercontent.com/aida-public/AB6AXuB2oogmzKIX3XrJBsKjb3YbxojaKn4re0jvxm0vkr-2l_4rP_-iTW1TNvbGw-qS5XWddpRmXVYEtp-7Rmo6iA4FQIUebdzBbIkoDRWwmHyRgK23tMMSBkmf0dcZlgv0utNROi0exNH6fwMNhHZ6pjgKh2tdIMEtsvplMjZOBeu0CWe_NZJ4IGSfxuGVsBUucR23uYMuZkrwVkyqnDWJgukW_2tE2EivCtOYXL8d47hmkNGQHLeZdRzP5Q8NSj2Bft8JxLT2z0hLTRk2"
                      }}
                      style={styles.profileImage}
                    />
                    <Pressable style={styles.editIcon}>
                      <MaterialIcons name="edit" size={14} color="white" />
                    </Pressable>
                  </View>

                  <View style={{ flex: 1 }}>
                    <Text style={styles.label}>{t("cafForm.field.name")}</Text>
                    <Text style={styles.name}>Mr. Ajay Kumar</Text>
                    <Text style={styles.role}>{t("cafForm.field.role")}</Text>
                  </View>
                </View>

                <InfoBox title={t("cafForm.field.aadhaar") } value="********9123" verified={false} />

                <InfoBox title={t("cafForm.field.pan")} value="******567F" verified />

                <View style={styles.twoCol}>
                  <Field label={t("cafForm.field.mobile")} value="7894561235" />
                  <Field label={t("cafForm.field.phone")} value={t("cafForm.value.na")} muted />
                </View>

                <Field label={t("cafForm.field.email")} value="xyz@gmail.com" />

                <View style={{ marginTop: 16 }}>
                  <Text style={styles.subHeader}>{t("cafForm.section.addressDetails")}</Text>

                  <View style={styles.twoCol}>
                    <Field label={t("cafForm.field.country")} value={t("cafForm.value.india")} />
                    <Field label={t("cafForm.field.state")} value={t("cafForm.value.punjab")} />
                    <Field label={t("cafForm.field.district")} value="S.A.S Nagar" />
                    <Field label={t("cafForm.field.tehsil")} value="Mohali" />
                  </View>

                  <Field label={t("cafForm.field.villageTown")} value="Mohali" />
                  <Field label={t("cafForm.field.address")} value="Mohali, Mohali, S.A.S Nagar" />
                  <Field label={t("cafForm.field.pinCode")} value="123456" />
                </View>

                <View style={styles.fileBox}>
                  <View>
                    <Text style={styles.fileTitle}>{t("cafForm.file.authorizationLetter")}</Text>
                    <Text style={styles.fileMeta}>{t("cafForm.file.meta")}</Text>
                  </View>
                  <Pressable style={styles.downloadBtn}>
                    <MaterialIcons name="download" size={20} color="#2563eb" />
                  </Pressable>
                </View>
              </View>
            </View>

            <View style={styles.disabledCard}>
              <View style={styles.disabledHeader}>
                <Text style={styles.disabledTitle}>{t("cafForm.section.businessEntityInfo")}</Text>
                <MaterialIcons name="expand-more" size={20} color="#9ca3af" />
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
          </View>
        </ScrollView>

        <View style={styles.bottomBar}>
          <View style={styles.bottomGrid}>
            <Pressable style={styles.cancelBtn}>
              <MaterialIcons name="close" size={18} color="#dc2626" />
              <Text style={styles.cancelText}>{t("cafForm.action.cancel")}</Text>
            </Pressable>

            <Pressable style={styles.nextBtn}>
              <Text style={styles.nextText}>{t("cafForm.action.nextStep")}</Text>
              <MaterialIcons name="arrow-forward" size={18} color="white" />
            </Pressable>
          </View>
        </View>
      </LinearGradient>
    </>
  );
}

function InfoBox({ title, value, verified }: { title: string; value: string; verified?: boolean }) {
  const { t } = useI18n();

  return (
    <View style={styles.infoBox}>
      <View style={styles.infoHeader}>
        <Text style={styles.label}>{title}</Text>
        <View style={{ flexDirection: "row", gap: 6 }}>
          {verified ? <MaterialIcons name="check-circle" size={16} color="#22c55e" /> : null}
          <MaterialIcons name="visibility-off" size={16} color="#9ca3af" />
        </View>
      </View>
      <Text style={styles.mono}>{value}</Text>
      <Text style={styles.attachment}>{t("cafForm.action.viewAttachment")}</Text>
    </View>
  );
}

function Field({ label, value, muted }: { label: string; value: string; muted?: boolean }) {
  return (
    <View style={{ marginBottom: 12, flex: 1 }}>
      <Text style={styles.label}>{label}</Text>
      <Text style={[styles.value, muted ? { color: "#9ca3af" } : null]}>{value}</Text>
    </View>
  );
}

const styles = {
  header: {
    height: 64,
    paddingHorizontal: 16,
    backgroundColor: "#ffffff",
    borderBottomWidth: 1,
    borderColor: "#e5e7eb",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  headerTitle: { fontSize: 18, fontWeight: "800", color: "#2563eb" },
  avatarCircle: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: "#dbeafe",
    alignItems: "center",
    justifyContent: "center"
  },
  container: { maxWidth: 420, alignSelf: "center", padding: 16 },
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
  sectionTitleRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 12
  },
  sectionTitle: { fontSize: 20, fontWeight: "800" },
  verifiedBadge: {
    backgroundColor: "#dcfce7",
    borderColor: "#bbf7d0",
    borderWidth: 1,
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 6
  },
  verifiedText: { fontSize: 11, fontWeight: "800", color: "#15803d" },
  card: {
    backgroundColor: "#ffffff",
    borderRadius: 16,
    padding: 16,
    borderWidth: 1,
    borderColor: "#e5e7eb"
  },
  decorCircle: {
    position: "absolute",
    top: 0,
    right: 0,
    width: 120,
    height: 120,
    backgroundColor: "#2563eb",
    opacity: 0.05,
    borderBottomLeftRadius: 120
  },
  profileRow: {
    flexDirection: "row",
    gap: 16,
    paddingBottom: 16,
    borderBottomWidth: 1,
    borderColor: "#e5e7eb"
  },
  profileImage: {
    width: 64,
    height: 64,
    borderRadius: 32,
    borderWidth: 2,
    borderColor: "#2563eb"
  },
  editIcon: {
    position: "absolute",
    bottom: 0,
    right: 0,
    backgroundColor: "#2563eb",
    width: 24,
    height: 24,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 2,
    borderColor: "#fff"
  },
  label: { fontSize: 11, fontWeight: "600", color: "#6b7280" },
  name: { fontSize: 18, fontWeight: "800" },
  role: { fontSize: 12, fontWeight: "600", color: "#2563eb" },
  infoBox: {
    backgroundColor: "#f9fafb",
    padding: 12,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#e5e7eb",
    marginTop: 16
  },
  infoHeader: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  mono: { fontFamily: "monospace", marginTop: 4 },
  attachment: {
    marginTop: 8,
    fontSize: 12,
    fontWeight: "700",
    color: "#2563eb"
  },
  twoCol: { flexDirection: "row", gap: 16, marginTop: 16 },
  value: { fontSize: 14, fontWeight: "700" },
  subHeader: {
    fontSize: 13,
    fontWeight: "800",
    color: "#2563eb",
    borderBottomWidth: 1,
    borderColor: "#e5e7eb",
    paddingBottom: 6,
    marginBottom: 12
  },
  fileBox: {
    marginTop: 16,
    padding: 14,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#bfdbfe",
    backgroundColor: "#eff6ff",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  fileTitle: { fontSize: 12, fontWeight: "800", color: "#2563eb" },
  fileMeta: { fontSize: 10, color: "#6b7280" },
  downloadBtn: {
    backgroundColor: "#ffffff",
    padding: 8,
    borderRadius: 999
  },
  disabledCard: {
    opacity: 0.6,
    marginBottom: 24,
    backgroundColor: "#ffffff",
    padding: 16,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "#e5e7eb"
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
