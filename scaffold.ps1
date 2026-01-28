$dirs = @(
  "src/app/(auth)",
  "src/app/(tabs)",
  "src/domain/entities",
  "src/domain/valueObjects",
  "src/domain/services",
  "src/features/swipe",
  "src/features/profile",
  "src/features/liked",
  "src/shared/components",
  "src/shared/hooks",
  "src/shared/theme",
  "src/shared/utils",
  "src/infra/api",
  "src/infra/storage",
  "src/infra/location",
  "src/types"
)

foreach ($dir in $dirs) {
  New-Item -ItemType Directory -Force -Path $dir
}
