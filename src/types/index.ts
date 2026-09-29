export type VehicleType = 'motorcycle' | 'bicycle' | 'walker';
export type OrderSourceType = 'restaurants' | 'tmart';
export type BatchId = 'batch1' | 'batch2' | 'batch3' | 'batch4_5' | 'batch6';

export interface BatchDetail {
  id: BatchId;
  name: string;
  pickupBonus: number;
  deliveryBonus: number;
  totalBonus: number;
  description?: string;
}

export interface PricingRates {
  pickup: number;
  dropoff: number;
  total: number;
}

export interface VehiclePricing {
  type: VehicleType;
  title: string;
  subtitle: string;
  restaurants: PricingRates;
  tmart: PricingRates;
  batches: Record<BatchId, BatchDetail>;
}

export interface IncomeCalculationParams {
  vehicle: VehicleType;
  batch: BatchId;
  ordersPerDay: number;
  workingDaysPerWeek: number;
  restaurantRatio: number; // 0 to 100 percentage
}

export interface IncomeCalculationResult {
  avgOrderPrice: number;
  dailyIncome: number;
  weeklyIncome: number;
  monthlyIncome: number;
  estimatedHours: number;
  dailyFuelCost?: number;
  netMonthlyIncome?: number;
}

export interface ApplicationFormData {
  fullName: string;
  phone: string;
  nationalId: string;
  vehicleType: VehicleType;
  zone: string;
  hasDrivingLicense?: boolean;
  hasMotorcycleLicense?: boolean;
  workExperience: string;
  notes?: string;
}
