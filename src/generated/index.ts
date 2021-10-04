import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | undefined;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** BigInt custom scalar type */
  BigInt: any;
  /** Date custom scalar type */
  DateTime: any;
  /** Decimal custom scalar type */
  Decimal: any;
  /** Json custom scalar type */
  Json: any;
};

export type AggregateCity = {
  __typename?: 'AggregateCity';
  _avg?: Maybe<CityAvgAggregateOutputType>;
  _count?: Maybe<CityCountAggregateOutputType>;
  _max?: Maybe<CityMaxAggregateOutputType>;
  _min?: Maybe<CityMinAggregateOutputType>;
  _sum?: Maybe<CitySumAggregateOutputType>;
};

export type AggregateFaq = {
  __typename?: 'AggregateFaq';
  _avg?: Maybe<FaqAvgAggregateOutputType>;
  _count?: Maybe<FaqCountAggregateOutputType>;
  _max?: Maybe<FaqMaxAggregateOutputType>;
  _min?: Maybe<FaqMinAggregateOutputType>;
  _sum?: Maybe<FaqSumAggregateOutputType>;
};

export type AggregateFeature = {
  __typename?: 'AggregateFeature';
  _avg?: Maybe<FeatureAvgAggregateOutputType>;
  _count?: Maybe<FeatureCountAggregateOutputType>;
  _max?: Maybe<FeatureMaxAggregateOutputType>;
  _min?: Maybe<FeatureMinAggregateOutputType>;
  _sum?: Maybe<FeatureSumAggregateOutputType>;
};

export type AggregateImage = {
  __typename?: 'AggregateImage';
  _avg?: Maybe<ImageAvgAggregateOutputType>;
  _count?: Maybe<ImageCountAggregateOutputType>;
  _max?: Maybe<ImageMaxAggregateOutputType>;
  _min?: Maybe<ImageMinAggregateOutputType>;
  _sum?: Maybe<ImageSumAggregateOutputType>;
};

export type AggregateProgram = {
  __typename?: 'AggregateProgram';
  _avg?: Maybe<ProgramAvgAggregateOutputType>;
  _count?: Maybe<ProgramCountAggregateOutputType>;
  _max?: Maybe<ProgramMaxAggregateOutputType>;
  _min?: Maybe<ProgramMinAggregateOutputType>;
  _sum?: Maybe<ProgramSumAggregateOutputType>;
};

export type AggregateSchool = {
  __typename?: 'AggregateSchool';
  _avg?: Maybe<SchoolAvgAggregateOutputType>;
  _count?: Maybe<SchoolCountAggregateOutputType>;
  _max?: Maybe<SchoolMaxAggregateOutputType>;
  _min?: Maybe<SchoolMinAggregateOutputType>;
  _sum?: Maybe<SchoolSumAggregateOutputType>;
};

export type AggregateStudent = {
  __typename?: 'AggregateStudent';
  _avg?: Maybe<StudentAvgAggregateOutputType>;
  _count?: Maybe<StudentCountAggregateOutputType>;
  _max?: Maybe<StudentMaxAggregateOutputType>;
  _min?: Maybe<StudentMinAggregateOutputType>;
  _sum?: Maybe<StudentSumAggregateOutputType>;
};

export type AggregateSubject = {
  __typename?: 'AggregateSubject';
  _avg?: Maybe<SubjectAvgAggregateOutputType>;
  _count?: Maybe<SubjectCountAggregateOutputType>;
  _max?: Maybe<SubjectMaxAggregateOutputType>;
  _min?: Maybe<SubjectMinAggregateOutputType>;
  _sum?: Maybe<SubjectSumAggregateOutputType>;
};

export type AggregateTeacher = {
  __typename?: 'AggregateTeacher';
  _avg?: Maybe<TeacherAvgAggregateOutputType>;
  _count?: Maybe<TeacherCountAggregateOutputType>;
  _max?: Maybe<TeacherMaxAggregateOutputType>;
  _min?: Maybe<TeacherMinAggregateOutputType>;
  _sum?: Maybe<TeacherSumAggregateOutputType>;
};

export type AggregateUser = {
  __typename?: 'AggregateUser';
  _avg?: Maybe<UserAvgAggregateOutputType>;
  _count?: Maybe<UserCountAggregateOutputType>;
  _max?: Maybe<UserMaxAggregateOutputType>;
  _min?: Maybe<UserMinAggregateOutputType>;
  _sum?: Maybe<UserSumAggregateOutputType>;
};

export type BatchPayload = {
  __typename?: 'BatchPayload';
  count: Scalars['Int'];
};

export type BoolFieldUpdateOperationsInput = {
  set?: Maybe<Scalars['Boolean']>;
};

export type BoolFilter = {
  equals?: Maybe<Scalars['Boolean']>;
  not?: Maybe<NestedBoolFilter>;
};

export type BoolWithAggregatesFilter = {
  _count?: Maybe<NestedIntFilter>;
  _max?: Maybe<NestedBoolFilter>;
  _min?: Maybe<NestedBoolFilter>;
  equals?: Maybe<Scalars['Boolean']>;
  not?: Maybe<NestedBoolWithAggregatesFilter>;
};

export type City = {
  __typename?: 'City';
  _count?: Maybe<CityCountOutputType>;
  createdAt: Scalars['DateTime'];
  id: Scalars['Int'];
  name: Scalars['String'];
  schools: Array<School>;
  updatedAt: Scalars['DateTime'];
};


export type CitySchoolsArgs = {
  cursor?: Maybe<SchoolWhereUniqueInput>;
  distinct?: Maybe<SchoolScalarFieldEnum>;
  orderBy?: Maybe<SchoolOrderByWithRelationInput>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<SchoolWhereInput>;
};

export type CityAvgAggregateOutputType = {
  __typename?: 'CityAvgAggregateOutputType';
  id?: Maybe<Scalars['Float']>;
};

export type CityAvgOrderByAggregateInput = {
  id?: Maybe<SortOrder>;
};

export type CityCountAggregateOutputType = {
  __typename?: 'CityCountAggregateOutputType';
  _all: Scalars['Int'];
  createdAt: Scalars['Int'];
  id: Scalars['Int'];
  name: Scalars['Int'];
  updatedAt: Scalars['Int'];
};

export type CityCountOrderByAggregateInput = {
  createdAt?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  name?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
};

export type CityCountOutputType = {
  __typename?: 'CityCountOutputType';
  schools: Scalars['Int'];
};

export type CityCreateInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  name: Scalars['String'];
  schools?: Maybe<SchoolCreateNestedManyWithoutCityInput>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type CityCreateManyInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Int']>;
  name: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type CityCreateNestedOneWithoutSchoolsInput = {
  connect?: Maybe<CityWhereUniqueInput>;
  connectOrCreate?: Maybe<CityCreateOrConnectWithoutSchoolsInput>;
  create?: Maybe<CityUncheckedCreateWithoutSchoolsInput>;
};

export type CityCreateOrConnectWithoutSchoolsInput = {
  create: CityUncheckedCreateWithoutSchoolsInput;
  where: CityWhereUniqueInput;
};

export type CityCreateWithoutSchoolsInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  name: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type CityMaxAggregateOutputType = {
  __typename?: 'CityMaxAggregateOutputType';
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type CityMaxOrderByAggregateInput = {
  createdAt?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  name?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
};

export type CityMinAggregateOutputType = {
  __typename?: 'CityMinAggregateOutputType';
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type CityMinOrderByAggregateInput = {
  createdAt?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  name?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
};

export type CityOrderByWithAggregationInput = {
  _avg?: Maybe<CityAvgOrderByAggregateInput>;
  _count?: Maybe<CityCountOrderByAggregateInput>;
  _max?: Maybe<CityMaxOrderByAggregateInput>;
  _min?: Maybe<CityMinOrderByAggregateInput>;
  _sum?: Maybe<CitySumOrderByAggregateInput>;
  createdAt?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  name?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
};

export type CityOrderByWithRelationInput = {
  createdAt?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  name?: Maybe<SortOrder>;
  schools?: Maybe<SchoolOrderByRelationAggregateInput>;
  updatedAt?: Maybe<SortOrder>;
};

export type CityRelationFilter = {
  is?: Maybe<CityWhereInput>;
  isNot?: Maybe<CityWhereInput>;
};

export enum CityScalarFieldEnum {
  CreatedAt = 'createdAt',
  Id = 'id',
  Name = 'name',
  UpdatedAt = 'updatedAt'
}

export type CityScalarWhereWithAggregatesInput = {
  AND?: Maybe<Array<Maybe<CityScalarWhereWithAggregatesInput>>>;
  NOT?: Maybe<Array<Maybe<CityScalarWhereWithAggregatesInput>>>;
  OR?: Maybe<Array<Maybe<CityScalarWhereWithAggregatesInput>>>;
  createdAt?: Maybe<DateTimeWithAggregatesFilter>;
  id?: Maybe<IntWithAggregatesFilter>;
  name?: Maybe<StringWithAggregatesFilter>;
  updatedAt?: Maybe<DateTimeWithAggregatesFilter>;
};

export type CitySumAggregateOutputType = {
  __typename?: 'CitySumAggregateOutputType';
  id?: Maybe<Scalars['Int']>;
};

export type CitySumOrderByAggregateInput = {
  id?: Maybe<SortOrder>;
};

export type CityUncheckedCreateInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Int']>;
  name: Scalars['String'];
  schools?: Maybe<SchoolUncheckedCreateNestedManyWithoutCityInput>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type CityUncheckedCreateWithoutSchoolsInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Int']>;
  name: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type CityUncheckedUpdateInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  id?: Maybe<IntFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  schools?: Maybe<SchoolUncheckedUpdateManyWithoutCityInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type CityUncheckedUpdateManyInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  id?: Maybe<IntFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type CityUncheckedUpdateWithoutSchoolsInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  id?: Maybe<IntFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type CityUpdateInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  schools?: Maybe<SchoolUpdateManyWithoutCityInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type CityUpdateManyMutationInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type CityUpdateOneRequiredWithoutSchoolsInput = {
  connect?: Maybe<CityWhereUniqueInput>;
  connectOrCreate?: Maybe<CityCreateOrConnectWithoutSchoolsInput>;
  create?: Maybe<CityUncheckedCreateWithoutSchoolsInput>;
  update?: Maybe<CityUncheckedUpdateWithoutSchoolsInput>;
  upsert?: Maybe<CityUpsertWithoutSchoolsInput>;
};

export type CityUpdateWithoutSchoolsInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type CityUpsertWithoutSchoolsInput = {
  create: CityUncheckedCreateWithoutSchoolsInput;
  update: CityUncheckedUpdateWithoutSchoolsInput;
};

export type CityWhereInput = {
  AND?: Maybe<Array<Maybe<CityWhereInput>>>;
  NOT?: Maybe<Array<Maybe<CityWhereInput>>>;
  OR?: Maybe<Array<Maybe<CityWhereInput>>>;
  createdAt?: Maybe<DateTimeFilter>;
  id?: Maybe<IntFilter>;
  name?: Maybe<StringFilter>;
  schools?: Maybe<SchoolListRelationFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
};

export type CityWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>;
};

export type DateTimeFieldUpdateOperationsInput = {
  set?: Maybe<Scalars['DateTime']>;
};

export type DateTimeFilter = {
  equals?: Maybe<Scalars['DateTime']>;
  gt?: Maybe<Scalars['DateTime']>;
  gte?: Maybe<Scalars['DateTime']>;
  in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  lt?: Maybe<Scalars['DateTime']>;
  lte?: Maybe<Scalars['DateTime']>;
  not?: Maybe<NestedDateTimeFilter>;
  notIn?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
};

export type DateTimeWithAggregatesFilter = {
  _count?: Maybe<NestedIntFilter>;
  _max?: Maybe<NestedDateTimeFilter>;
  _min?: Maybe<NestedDateTimeFilter>;
  equals?: Maybe<Scalars['DateTime']>;
  gt?: Maybe<Scalars['DateTime']>;
  gte?: Maybe<Scalars['DateTime']>;
  in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  lt?: Maybe<Scalars['DateTime']>;
  lte?: Maybe<Scalars['DateTime']>;
  not?: Maybe<NestedDateTimeWithAggregatesFilter>;
  notIn?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
};

export type Enum = {
  __typename?: 'Enum';
  fields: Array<Scalars['String']>;
  name: Scalars['String'];
};

export type Faq = {
  __typename?: 'Faq';
  createdAt: Scalars['DateTime'];
  descriptionKz: Scalars['String'];
  descriptionRu: Scalars['String'];
  id: Scalars['Int'];
  titleKz: Scalars['String'];
  titleRu: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type FaqAvgAggregateOutputType = {
  __typename?: 'FaqAvgAggregateOutputType';
  id?: Maybe<Scalars['Float']>;
};

export type FaqAvgOrderByAggregateInput = {
  id?: Maybe<SortOrder>;
};

export type FaqCountAggregateOutputType = {
  __typename?: 'FaqCountAggregateOutputType';
  _all: Scalars['Int'];
  createdAt: Scalars['Int'];
  descriptionKz: Scalars['Int'];
  descriptionRu: Scalars['Int'];
  id: Scalars['Int'];
  titleKz: Scalars['Int'];
  titleRu: Scalars['Int'];
  updatedAt: Scalars['Int'];
};

export type FaqCountOrderByAggregateInput = {
  createdAt?: Maybe<SortOrder>;
  descriptionKz?: Maybe<SortOrder>;
  descriptionRu?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  titleKz?: Maybe<SortOrder>;
  titleRu?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
};

export type FaqCreateInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  descriptionKz: Scalars['String'];
  descriptionRu: Scalars['String'];
  titleKz: Scalars['String'];
  titleRu: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type FaqCreateManyInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  descriptionKz: Scalars['String'];
  descriptionRu: Scalars['String'];
  id?: Maybe<Scalars['Int']>;
  titleKz: Scalars['String'];
  titleRu: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type FaqMaxAggregateOutputType = {
  __typename?: 'FaqMaxAggregateOutputType';
  createdAt?: Maybe<Scalars['DateTime']>;
  descriptionKz?: Maybe<Scalars['String']>;
  descriptionRu?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  titleKz?: Maybe<Scalars['String']>;
  titleRu?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type FaqMaxOrderByAggregateInput = {
  createdAt?: Maybe<SortOrder>;
  descriptionKz?: Maybe<SortOrder>;
  descriptionRu?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  titleKz?: Maybe<SortOrder>;
  titleRu?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
};

export type FaqMinAggregateOutputType = {
  __typename?: 'FaqMinAggregateOutputType';
  createdAt?: Maybe<Scalars['DateTime']>;
  descriptionKz?: Maybe<Scalars['String']>;
  descriptionRu?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  titleKz?: Maybe<Scalars['String']>;
  titleRu?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type FaqMinOrderByAggregateInput = {
  createdAt?: Maybe<SortOrder>;
  descriptionKz?: Maybe<SortOrder>;
  descriptionRu?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  titleKz?: Maybe<SortOrder>;
  titleRu?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
};

export type FaqOrderByWithAggregationInput = {
  _avg?: Maybe<FaqAvgOrderByAggregateInput>;
  _count?: Maybe<FaqCountOrderByAggregateInput>;
  _max?: Maybe<FaqMaxOrderByAggregateInput>;
  _min?: Maybe<FaqMinOrderByAggregateInput>;
  _sum?: Maybe<FaqSumOrderByAggregateInput>;
  createdAt?: Maybe<SortOrder>;
  descriptionKz?: Maybe<SortOrder>;
  descriptionRu?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  titleKz?: Maybe<SortOrder>;
  titleRu?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
};

export type FaqOrderByWithRelationInput = {
  createdAt?: Maybe<SortOrder>;
  descriptionKz?: Maybe<SortOrder>;
  descriptionRu?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  titleKz?: Maybe<SortOrder>;
  titleRu?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
};

export enum FaqScalarFieldEnum {
  CreatedAt = 'createdAt',
  DescriptionKz = 'descriptionKz',
  DescriptionRu = 'descriptionRu',
  Id = 'id',
  TitleKz = 'titleKz',
  TitleRu = 'titleRu',
  UpdatedAt = 'updatedAt'
}

export type FaqScalarWhereWithAggregatesInput = {
  AND?: Maybe<Array<Maybe<FaqScalarWhereWithAggregatesInput>>>;
  NOT?: Maybe<Array<Maybe<FaqScalarWhereWithAggregatesInput>>>;
  OR?: Maybe<Array<Maybe<FaqScalarWhereWithAggregatesInput>>>;
  createdAt?: Maybe<DateTimeWithAggregatesFilter>;
  descriptionKz?: Maybe<StringWithAggregatesFilter>;
  descriptionRu?: Maybe<StringWithAggregatesFilter>;
  id?: Maybe<IntWithAggregatesFilter>;
  titleKz?: Maybe<StringWithAggregatesFilter>;
  titleRu?: Maybe<StringWithAggregatesFilter>;
  updatedAt?: Maybe<DateTimeWithAggregatesFilter>;
};

export type FaqSumAggregateOutputType = {
  __typename?: 'FaqSumAggregateOutputType';
  id?: Maybe<Scalars['Int']>;
};

export type FaqSumOrderByAggregateInput = {
  id?: Maybe<SortOrder>;
};

export type FaqUncheckedCreateInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  descriptionKz: Scalars['String'];
  descriptionRu: Scalars['String'];
  id?: Maybe<Scalars['Int']>;
  titleKz: Scalars['String'];
  titleRu: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type FaqUncheckedUpdateInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  descriptionKz?: Maybe<StringFieldUpdateOperationsInput>;
  descriptionRu?: Maybe<StringFieldUpdateOperationsInput>;
  id?: Maybe<IntFieldUpdateOperationsInput>;
  titleKz?: Maybe<StringFieldUpdateOperationsInput>;
  titleRu?: Maybe<StringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type FaqUncheckedUpdateManyInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  descriptionKz?: Maybe<StringFieldUpdateOperationsInput>;
  descriptionRu?: Maybe<StringFieldUpdateOperationsInput>;
  id?: Maybe<IntFieldUpdateOperationsInput>;
  titleKz?: Maybe<StringFieldUpdateOperationsInput>;
  titleRu?: Maybe<StringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type FaqUpdateInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  descriptionKz?: Maybe<StringFieldUpdateOperationsInput>;
  descriptionRu?: Maybe<StringFieldUpdateOperationsInput>;
  titleKz?: Maybe<StringFieldUpdateOperationsInput>;
  titleRu?: Maybe<StringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type FaqUpdateManyMutationInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  descriptionKz?: Maybe<StringFieldUpdateOperationsInput>;
  descriptionRu?: Maybe<StringFieldUpdateOperationsInput>;
  titleKz?: Maybe<StringFieldUpdateOperationsInput>;
  titleRu?: Maybe<StringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type FaqWhereInput = {
  AND?: Maybe<Array<Maybe<FaqWhereInput>>>;
  NOT?: Maybe<Array<Maybe<FaqWhereInput>>>;
  OR?: Maybe<Array<Maybe<FaqWhereInput>>>;
  createdAt?: Maybe<DateTimeFilter>;
  descriptionKz?: Maybe<StringFilter>;
  descriptionRu?: Maybe<StringFilter>;
  id?: Maybe<IntFilter>;
  titleKz?: Maybe<StringFilter>;
  titleRu?: Maybe<StringFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
};

export type FaqWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>;
};

export type Feature = {
  __typename?: 'Feature';
  _count?: Maybe<FeatureCountOutputType>;
  contentEn: Scalars['String'];
  contentKz: Scalars['String'];
  contentRu: Scalars['String'];
  createdAt: Scalars['DateTime'];
  id: Scalars['Int'];
  images: Array<Image>;
  titleEn: Scalars['String'];
  titleKz: Scalars['String'];
  titleRu: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};


export type FeatureImagesArgs = {
  cursor?: Maybe<ImageWhereUniqueInput>;
  distinct?: Maybe<ImageScalarFieldEnum>;
  orderBy?: Maybe<ImageOrderByWithRelationInput>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<ImageWhereInput>;
};

export type FeatureAvgAggregateOutputType = {
  __typename?: 'FeatureAvgAggregateOutputType';
  id?: Maybe<Scalars['Float']>;
};

export type FeatureAvgOrderByAggregateInput = {
  id?: Maybe<SortOrder>;
};

export type FeatureCountAggregateOutputType = {
  __typename?: 'FeatureCountAggregateOutputType';
  _all: Scalars['Int'];
  contentEn: Scalars['Int'];
  contentKz: Scalars['Int'];
  contentRu: Scalars['Int'];
  createdAt: Scalars['Int'];
  id: Scalars['Int'];
  titleEn: Scalars['Int'];
  titleKz: Scalars['Int'];
  titleRu: Scalars['Int'];
  updatedAt: Scalars['Int'];
};

export type FeatureCountOrderByAggregateInput = {
  contentEn?: Maybe<SortOrder>;
  contentKz?: Maybe<SortOrder>;
  contentRu?: Maybe<SortOrder>;
  createdAt?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  titleEn?: Maybe<SortOrder>;
  titleKz?: Maybe<SortOrder>;
  titleRu?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
};

export type FeatureCountOutputType = {
  __typename?: 'FeatureCountOutputType';
  images: Scalars['Int'];
};

export type FeatureCreateInput = {
  contentEn: Scalars['String'];
  contentKz: Scalars['String'];
  contentRu: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  images?: Maybe<ImageCreateNestedManyWithoutFeatureInput>;
  titleEn: Scalars['String'];
  titleKz: Scalars['String'];
  titleRu: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type FeatureCreateManyInput = {
  contentEn: Scalars['String'];
  contentKz: Scalars['String'];
  contentRu: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Int']>;
  titleEn: Scalars['String'];
  titleKz: Scalars['String'];
  titleRu: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type FeatureCreateNestedOneWithoutImagesInput = {
  connect?: Maybe<FeatureWhereUniqueInput>;
  connectOrCreate?: Maybe<FeatureCreateOrConnectWithoutImagesInput>;
  create?: Maybe<FeatureUncheckedCreateWithoutImagesInput>;
};

export type FeatureCreateOrConnectWithoutImagesInput = {
  create: FeatureUncheckedCreateWithoutImagesInput;
  where: FeatureWhereUniqueInput;
};

export type FeatureCreateWithoutImagesInput = {
  contentEn: Scalars['String'];
  contentKz: Scalars['String'];
  contentRu: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  titleEn: Scalars['String'];
  titleKz: Scalars['String'];
  titleRu: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type FeatureMaxAggregateOutputType = {
  __typename?: 'FeatureMaxAggregateOutputType';
  contentEn?: Maybe<Scalars['String']>;
  contentKz?: Maybe<Scalars['String']>;
  contentRu?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Int']>;
  titleEn?: Maybe<Scalars['String']>;
  titleKz?: Maybe<Scalars['String']>;
  titleRu?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type FeatureMaxOrderByAggregateInput = {
  contentEn?: Maybe<SortOrder>;
  contentKz?: Maybe<SortOrder>;
  contentRu?: Maybe<SortOrder>;
  createdAt?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  titleEn?: Maybe<SortOrder>;
  titleKz?: Maybe<SortOrder>;
  titleRu?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
};

export type FeatureMinAggregateOutputType = {
  __typename?: 'FeatureMinAggregateOutputType';
  contentEn?: Maybe<Scalars['String']>;
  contentKz?: Maybe<Scalars['String']>;
  contentRu?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Int']>;
  titleEn?: Maybe<Scalars['String']>;
  titleKz?: Maybe<Scalars['String']>;
  titleRu?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type FeatureMinOrderByAggregateInput = {
  contentEn?: Maybe<SortOrder>;
  contentKz?: Maybe<SortOrder>;
  contentRu?: Maybe<SortOrder>;
  createdAt?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  titleEn?: Maybe<SortOrder>;
  titleKz?: Maybe<SortOrder>;
  titleRu?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
};

export type FeatureOrderByWithAggregationInput = {
  _avg?: Maybe<FeatureAvgOrderByAggregateInput>;
  _count?: Maybe<FeatureCountOrderByAggregateInput>;
  _max?: Maybe<FeatureMaxOrderByAggregateInput>;
  _min?: Maybe<FeatureMinOrderByAggregateInput>;
  _sum?: Maybe<FeatureSumOrderByAggregateInput>;
  contentEn?: Maybe<SortOrder>;
  contentKz?: Maybe<SortOrder>;
  contentRu?: Maybe<SortOrder>;
  createdAt?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  titleEn?: Maybe<SortOrder>;
  titleKz?: Maybe<SortOrder>;
  titleRu?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
};

export type FeatureOrderByWithRelationInput = {
  contentEn?: Maybe<SortOrder>;
  contentKz?: Maybe<SortOrder>;
  contentRu?: Maybe<SortOrder>;
  createdAt?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  images?: Maybe<ImageOrderByRelationAggregateInput>;
  titleEn?: Maybe<SortOrder>;
  titleKz?: Maybe<SortOrder>;
  titleRu?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
};

export type FeatureRelationFilter = {
  is?: Maybe<FeatureWhereInput>;
  isNot?: Maybe<FeatureWhereInput>;
};

export enum FeatureScalarFieldEnum {
  ContentEn = 'contentEn',
  ContentKz = 'contentKz',
  ContentRu = 'contentRu',
  CreatedAt = 'createdAt',
  Id = 'id',
  TitleEn = 'titleEn',
  TitleKz = 'titleKz',
  TitleRu = 'titleRu',
  UpdatedAt = 'updatedAt'
}

export type FeatureScalarWhereWithAggregatesInput = {
  AND?: Maybe<Array<Maybe<FeatureScalarWhereWithAggregatesInput>>>;
  NOT?: Maybe<Array<Maybe<FeatureScalarWhereWithAggregatesInput>>>;
  OR?: Maybe<Array<Maybe<FeatureScalarWhereWithAggregatesInput>>>;
  contentEn?: Maybe<StringWithAggregatesFilter>;
  contentKz?: Maybe<StringWithAggregatesFilter>;
  contentRu?: Maybe<StringWithAggregatesFilter>;
  createdAt?: Maybe<DateTimeWithAggregatesFilter>;
  id?: Maybe<IntWithAggregatesFilter>;
  titleEn?: Maybe<StringWithAggregatesFilter>;
  titleKz?: Maybe<StringWithAggregatesFilter>;
  titleRu?: Maybe<StringWithAggregatesFilter>;
  updatedAt?: Maybe<DateTimeWithAggregatesFilter>;
};

export type FeatureSumAggregateOutputType = {
  __typename?: 'FeatureSumAggregateOutputType';
  id?: Maybe<Scalars['Int']>;
};

export type FeatureSumOrderByAggregateInput = {
  id?: Maybe<SortOrder>;
};

export type FeatureUncheckedCreateInput = {
  contentEn: Scalars['String'];
  contentKz: Scalars['String'];
  contentRu: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Int']>;
  images?: Maybe<ImageUncheckedCreateNestedManyWithoutFeatureInput>;
  titleEn: Scalars['String'];
  titleKz: Scalars['String'];
  titleRu: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type FeatureUncheckedCreateWithoutImagesInput = {
  contentEn: Scalars['String'];
  contentKz: Scalars['String'];
  contentRu: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Int']>;
  titleEn: Scalars['String'];
  titleKz: Scalars['String'];
  titleRu: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type FeatureUncheckedUpdateInput = {
  contentEn?: Maybe<StringFieldUpdateOperationsInput>;
  contentKz?: Maybe<StringFieldUpdateOperationsInput>;
  contentRu?: Maybe<StringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  id?: Maybe<IntFieldUpdateOperationsInput>;
  images?: Maybe<ImageUncheckedUpdateManyWithoutFeatureInput>;
  titleEn?: Maybe<StringFieldUpdateOperationsInput>;
  titleKz?: Maybe<StringFieldUpdateOperationsInput>;
  titleRu?: Maybe<StringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type FeatureUncheckedUpdateManyInput = {
  contentEn?: Maybe<StringFieldUpdateOperationsInput>;
  contentKz?: Maybe<StringFieldUpdateOperationsInput>;
  contentRu?: Maybe<StringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  id?: Maybe<IntFieldUpdateOperationsInput>;
  titleEn?: Maybe<StringFieldUpdateOperationsInput>;
  titleKz?: Maybe<StringFieldUpdateOperationsInput>;
  titleRu?: Maybe<StringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type FeatureUncheckedUpdateWithoutImagesInput = {
  contentEn?: Maybe<StringFieldUpdateOperationsInput>;
  contentKz?: Maybe<StringFieldUpdateOperationsInput>;
  contentRu?: Maybe<StringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  id?: Maybe<IntFieldUpdateOperationsInput>;
  titleEn?: Maybe<StringFieldUpdateOperationsInput>;
  titleKz?: Maybe<StringFieldUpdateOperationsInput>;
  titleRu?: Maybe<StringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type FeatureUpdateInput = {
  contentEn?: Maybe<StringFieldUpdateOperationsInput>;
  contentKz?: Maybe<StringFieldUpdateOperationsInput>;
  contentRu?: Maybe<StringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  images?: Maybe<ImageUpdateManyWithoutFeatureInput>;
  titleEn?: Maybe<StringFieldUpdateOperationsInput>;
  titleKz?: Maybe<StringFieldUpdateOperationsInput>;
  titleRu?: Maybe<StringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type FeatureUpdateManyMutationInput = {
  contentEn?: Maybe<StringFieldUpdateOperationsInput>;
  contentKz?: Maybe<StringFieldUpdateOperationsInput>;
  contentRu?: Maybe<StringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  titleEn?: Maybe<StringFieldUpdateOperationsInput>;
  titleKz?: Maybe<StringFieldUpdateOperationsInput>;
  titleRu?: Maybe<StringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type FeatureUpdateOneWithoutImagesInput = {
  connect?: Maybe<FeatureWhereUniqueInput>;
  connectOrCreate?: Maybe<FeatureCreateOrConnectWithoutImagesInput>;
  create?: Maybe<FeatureUncheckedCreateWithoutImagesInput>;
  delete?: Maybe<Scalars['Boolean']>;
  disconnect?: Maybe<Scalars['Boolean']>;
  update?: Maybe<FeatureUncheckedUpdateWithoutImagesInput>;
  upsert?: Maybe<FeatureUpsertWithoutImagesInput>;
};

export type FeatureUpdateWithoutImagesInput = {
  contentEn?: Maybe<StringFieldUpdateOperationsInput>;
  contentKz?: Maybe<StringFieldUpdateOperationsInput>;
  contentRu?: Maybe<StringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  titleEn?: Maybe<StringFieldUpdateOperationsInput>;
  titleKz?: Maybe<StringFieldUpdateOperationsInput>;
  titleRu?: Maybe<StringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type FeatureUpsertWithoutImagesInput = {
  create: FeatureUncheckedCreateWithoutImagesInput;
  update: FeatureUncheckedUpdateWithoutImagesInput;
};

export type FeatureWhereInput = {
  AND?: Maybe<Array<Maybe<FeatureWhereInput>>>;
  NOT?: Maybe<Array<Maybe<FeatureWhereInput>>>;
  OR?: Maybe<Array<Maybe<FeatureWhereInput>>>;
  contentEn?: Maybe<StringFilter>;
  contentKz?: Maybe<StringFilter>;
  contentRu?: Maybe<StringFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  id?: Maybe<IntFilter>;
  images?: Maybe<ImageListRelationFilter>;
  titleEn?: Maybe<StringFilter>;
  titleKz?: Maybe<StringFilter>;
  titleRu?: Maybe<StringFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
};

export type FeatureWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>;
};

export type Field = {
  __typename?: 'Field';
  create: Scalars['Boolean'];
  editor: Scalars['Boolean'];
  filter: Scalars['Boolean'];
  id: Scalars['String'];
  isId: Scalars['Boolean'];
  kind: KindEnum;
  list: Scalars['Boolean'];
  name: Scalars['String'];
  order: Scalars['Int'];
  read: Scalars['Boolean'];
  relationField?: Maybe<Scalars['Boolean']>;
  required: Scalars['Boolean'];
  sort: Scalars['Boolean'];
  title: Scalars['String'];
  type: Scalars['String'];
  unique: Scalars['Boolean'];
  update: Scalars['Boolean'];
  upload: Scalars['Boolean'];
};

export type Image = {
  __typename?: 'Image';
  contentType: Scalars['String'];
  createdAt: Scalars['DateTime'];
  feature?: Maybe<Feature>;
  featureId?: Maybe<Scalars['Int']>;
  filename: Scalars['String'];
  id: Scalars['Int'];
  name: Scalars['String'];
  size: Scalars['Int'];
  storage: Scalars['String'];
  student?: Maybe<Student>;
  studentId?: Maybe<Scalars['Int']>;
  teacher?: Maybe<Teacher>;
  teacherId?: Maybe<Scalars['Int']>;
  updatedAt: Scalars['DateTime'];
  url: Scalars['String'];
};

export type ImageAvgAggregateOutputType = {
  __typename?: 'ImageAvgAggregateOutputType';
  featureId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
  studentId?: Maybe<Scalars['Float']>;
  teacherId?: Maybe<Scalars['Float']>;
};

export type ImageAvgOrderByAggregateInput = {
  featureId?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  size?: Maybe<SortOrder>;
  studentId?: Maybe<SortOrder>;
  teacherId?: Maybe<SortOrder>;
};

export type ImageCountAggregateOutputType = {
  __typename?: 'ImageCountAggregateOutputType';
  _all: Scalars['Int'];
  contentType: Scalars['Int'];
  createdAt: Scalars['Int'];
  featureId: Scalars['Int'];
  filename: Scalars['Int'];
  id: Scalars['Int'];
  name: Scalars['Int'];
  size: Scalars['Int'];
  storage: Scalars['Int'];
  studentId: Scalars['Int'];
  teacherId: Scalars['Int'];
  updatedAt: Scalars['Int'];
  url: Scalars['Int'];
};

export type ImageCountOrderByAggregateInput = {
  contentType?: Maybe<SortOrder>;
  createdAt?: Maybe<SortOrder>;
  featureId?: Maybe<SortOrder>;
  filename?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  name?: Maybe<SortOrder>;
  size?: Maybe<SortOrder>;
  storage?: Maybe<SortOrder>;
  studentId?: Maybe<SortOrder>;
  teacherId?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
  url?: Maybe<SortOrder>;
};

export type ImageCreateInput = {
  contentType: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  feature?: Maybe<FeatureCreateNestedOneWithoutImagesInput>;
  filename: Scalars['String'];
  name: Scalars['String'];
  size: Scalars['Int'];
  storage?: Maybe<Scalars['String']>;
  student?: Maybe<StudentCreateNestedOneWithoutImagesInput>;
  teacher?: Maybe<TeacherCreateNestedOneWithoutImagesInput>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  url: Scalars['String'];
};

export type ImageCreateManyFeatureInput = {
  contentType: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  filename: Scalars['String'];
  id?: Maybe<Scalars['Int']>;
  name: Scalars['String'];
  size: Scalars['Int'];
  storage?: Maybe<Scalars['String']>;
  studentId?: Maybe<Scalars['Int']>;
  teacherId?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  url: Scalars['String'];
};

export type ImageCreateManyFeatureInputEnvelope = {
  data: ImageCreateManyFeatureInput;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type ImageCreateManyInput = {
  contentType: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  featureId?: Maybe<Scalars['Int']>;
  filename: Scalars['String'];
  id?: Maybe<Scalars['Int']>;
  name: Scalars['String'];
  size: Scalars['Int'];
  storage?: Maybe<Scalars['String']>;
  studentId?: Maybe<Scalars['Int']>;
  teacherId?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  url: Scalars['String'];
};

export type ImageCreateManyStudentInput = {
  contentType: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  featureId?: Maybe<Scalars['Int']>;
  filename: Scalars['String'];
  id?: Maybe<Scalars['Int']>;
  name: Scalars['String'];
  size: Scalars['Int'];
  storage?: Maybe<Scalars['String']>;
  teacherId?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  url: Scalars['String'];
};

export type ImageCreateManyStudentInputEnvelope = {
  data: ImageCreateManyStudentInput;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type ImageCreateManyTeacherInput = {
  contentType: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  featureId?: Maybe<Scalars['Int']>;
  filename: Scalars['String'];
  id?: Maybe<Scalars['Int']>;
  name: Scalars['String'];
  size: Scalars['Int'];
  storage?: Maybe<Scalars['String']>;
  studentId?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  url: Scalars['String'];
};

export type ImageCreateManyTeacherInputEnvelope = {
  data: ImageCreateManyTeacherInput;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type ImageCreateNestedManyWithoutFeatureInput = {
  connect?: Maybe<Array<Maybe<ImageWhereUniqueInput>>>;
  connectOrCreate?: Maybe<Array<Maybe<ImageCreateOrConnectWithoutFeatureInput>>>;
  create?: Maybe<Array<Maybe<ImageCreateWithoutFeatureInput>>>;
  createMany?: Maybe<ImageCreateManyFeatureInputEnvelope>;
};

export type ImageCreateNestedManyWithoutStudentInput = {
  connect?: Maybe<Array<Maybe<ImageWhereUniqueInput>>>;
  connectOrCreate?: Maybe<Array<Maybe<ImageCreateOrConnectWithoutStudentInput>>>;
  create?: Maybe<Array<Maybe<ImageCreateWithoutStudentInput>>>;
  createMany?: Maybe<ImageCreateManyStudentInputEnvelope>;
};

export type ImageCreateNestedManyWithoutTeacherInput = {
  connect?: Maybe<Array<Maybe<ImageWhereUniqueInput>>>;
  connectOrCreate?: Maybe<Array<Maybe<ImageCreateOrConnectWithoutTeacherInput>>>;
  create?: Maybe<Array<Maybe<ImageCreateWithoutTeacherInput>>>;
  createMany?: Maybe<ImageCreateManyTeacherInputEnvelope>;
};

export type ImageCreateOrConnectWithoutFeatureInput = {
  create: ImageUncheckedCreateWithoutFeatureInput;
  where: ImageWhereUniqueInput;
};

export type ImageCreateOrConnectWithoutStudentInput = {
  create: ImageUncheckedCreateWithoutStudentInput;
  where: ImageWhereUniqueInput;
};

export type ImageCreateOrConnectWithoutTeacherInput = {
  create: ImageUncheckedCreateWithoutTeacherInput;
  where: ImageWhereUniqueInput;
};

export type ImageCreateWithoutFeatureInput = {
  contentType: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  filename: Scalars['String'];
  name: Scalars['String'];
  size: Scalars['Int'];
  storage?: Maybe<Scalars['String']>;
  student?: Maybe<StudentCreateNestedOneWithoutImagesInput>;
  teacher?: Maybe<TeacherCreateNestedOneWithoutImagesInput>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  url: Scalars['String'];
};

export type ImageCreateWithoutStudentInput = {
  contentType: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  feature?: Maybe<FeatureCreateNestedOneWithoutImagesInput>;
  filename: Scalars['String'];
  name: Scalars['String'];
  size: Scalars['Int'];
  storage?: Maybe<Scalars['String']>;
  teacher?: Maybe<TeacherCreateNestedOneWithoutImagesInput>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  url: Scalars['String'];
};

export type ImageCreateWithoutTeacherInput = {
  contentType: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  feature?: Maybe<FeatureCreateNestedOneWithoutImagesInput>;
  filename: Scalars['String'];
  name: Scalars['String'];
  size: Scalars['Int'];
  storage?: Maybe<Scalars['String']>;
  student?: Maybe<StudentCreateNestedOneWithoutImagesInput>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  url: Scalars['String'];
};

export type ImageListRelationFilter = {
  every?: Maybe<ImageWhereInput>;
  none?: Maybe<ImageWhereInput>;
  some?: Maybe<ImageWhereInput>;
};

export type ImageMaxAggregateOutputType = {
  __typename?: 'ImageMaxAggregateOutputType';
  contentType?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  featureId?: Maybe<Scalars['Int']>;
  filename?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Int']>;
  storage?: Maybe<Scalars['String']>;
  studentId?: Maybe<Scalars['Int']>;
  teacherId?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  url?: Maybe<Scalars['String']>;
};

export type ImageMaxOrderByAggregateInput = {
  contentType?: Maybe<SortOrder>;
  createdAt?: Maybe<SortOrder>;
  featureId?: Maybe<SortOrder>;
  filename?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  name?: Maybe<SortOrder>;
  size?: Maybe<SortOrder>;
  storage?: Maybe<SortOrder>;
  studentId?: Maybe<SortOrder>;
  teacherId?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
  url?: Maybe<SortOrder>;
};

export type ImageMinAggregateOutputType = {
  __typename?: 'ImageMinAggregateOutputType';
  contentType?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  featureId?: Maybe<Scalars['Int']>;
  filename?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Int']>;
  storage?: Maybe<Scalars['String']>;
  studentId?: Maybe<Scalars['Int']>;
  teacherId?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  url?: Maybe<Scalars['String']>;
};

export type ImageMinOrderByAggregateInput = {
  contentType?: Maybe<SortOrder>;
  createdAt?: Maybe<SortOrder>;
  featureId?: Maybe<SortOrder>;
  filename?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  name?: Maybe<SortOrder>;
  size?: Maybe<SortOrder>;
  storage?: Maybe<SortOrder>;
  studentId?: Maybe<SortOrder>;
  teacherId?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
  url?: Maybe<SortOrder>;
};

export type ImageOrderByRelationAggregateInput = {
  _count?: Maybe<SortOrder>;
};

export type ImageOrderByWithAggregationInput = {
  _avg?: Maybe<ImageAvgOrderByAggregateInput>;
  _count?: Maybe<ImageCountOrderByAggregateInput>;
  _max?: Maybe<ImageMaxOrderByAggregateInput>;
  _min?: Maybe<ImageMinOrderByAggregateInput>;
  _sum?: Maybe<ImageSumOrderByAggregateInput>;
  contentType?: Maybe<SortOrder>;
  createdAt?: Maybe<SortOrder>;
  featureId?: Maybe<SortOrder>;
  filename?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  name?: Maybe<SortOrder>;
  size?: Maybe<SortOrder>;
  storage?: Maybe<SortOrder>;
  studentId?: Maybe<SortOrder>;
  teacherId?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
  url?: Maybe<SortOrder>;
};

export type ImageOrderByWithRelationInput = {
  contentType?: Maybe<SortOrder>;
  createdAt?: Maybe<SortOrder>;
  feature?: Maybe<FeatureOrderByWithRelationInput>;
  featureId?: Maybe<SortOrder>;
  filename?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  name?: Maybe<SortOrder>;
  size?: Maybe<SortOrder>;
  storage?: Maybe<SortOrder>;
  student?: Maybe<StudentOrderByWithRelationInput>;
  studentId?: Maybe<SortOrder>;
  teacher?: Maybe<TeacherOrderByWithRelationInput>;
  teacherId?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
  url?: Maybe<SortOrder>;
};

export enum ImageScalarFieldEnum {
  ContentType = 'contentType',
  CreatedAt = 'createdAt',
  FeatureId = 'featureId',
  Filename = 'filename',
  Id = 'id',
  Name = 'name',
  Size = 'size',
  Storage = 'storage',
  StudentId = 'studentId',
  TeacherId = 'teacherId',
  UpdatedAt = 'updatedAt',
  Url = 'url'
}

export type ImageScalarWhereInput = {
  AND?: Maybe<Array<Maybe<ImageScalarWhereInput>>>;
  NOT?: Maybe<Array<Maybe<ImageScalarWhereInput>>>;
  OR?: Maybe<Array<Maybe<ImageScalarWhereInput>>>;
  contentType?: Maybe<StringFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  featureId?: Maybe<IntNullableFilter>;
  filename?: Maybe<StringFilter>;
  id?: Maybe<IntFilter>;
  name?: Maybe<StringFilter>;
  size?: Maybe<IntFilter>;
  storage?: Maybe<StringFilter>;
  studentId?: Maybe<IntNullableFilter>;
  teacherId?: Maybe<IntNullableFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
  url?: Maybe<StringFilter>;
};

export type ImageScalarWhereWithAggregatesInput = {
  AND?: Maybe<Array<Maybe<ImageScalarWhereWithAggregatesInput>>>;
  NOT?: Maybe<Array<Maybe<ImageScalarWhereWithAggregatesInput>>>;
  OR?: Maybe<Array<Maybe<ImageScalarWhereWithAggregatesInput>>>;
  contentType?: Maybe<StringWithAggregatesFilter>;
  createdAt?: Maybe<DateTimeWithAggregatesFilter>;
  featureId?: Maybe<IntNullableWithAggregatesFilter>;
  filename?: Maybe<StringWithAggregatesFilter>;
  id?: Maybe<IntWithAggregatesFilter>;
  name?: Maybe<StringWithAggregatesFilter>;
  size?: Maybe<IntWithAggregatesFilter>;
  storage?: Maybe<StringWithAggregatesFilter>;
  studentId?: Maybe<IntNullableWithAggregatesFilter>;
  teacherId?: Maybe<IntNullableWithAggregatesFilter>;
  updatedAt?: Maybe<DateTimeWithAggregatesFilter>;
  url?: Maybe<StringWithAggregatesFilter>;
};

export type ImageSumAggregateOutputType = {
  __typename?: 'ImageSumAggregateOutputType';
  featureId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  size?: Maybe<Scalars['Int']>;
  studentId?: Maybe<Scalars['Int']>;
  teacherId?: Maybe<Scalars['Int']>;
};

export type ImageSumOrderByAggregateInput = {
  featureId?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  size?: Maybe<SortOrder>;
  studentId?: Maybe<SortOrder>;
  teacherId?: Maybe<SortOrder>;
};

export type ImageUncheckedCreateInput = {
  contentType: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  featureId?: Maybe<Scalars['Int']>;
  filename: Scalars['String'];
  id?: Maybe<Scalars['Int']>;
  name: Scalars['String'];
  size: Scalars['Int'];
  storage?: Maybe<Scalars['String']>;
  studentId?: Maybe<Scalars['Int']>;
  teacherId?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  url: Scalars['String'];
};

export type ImageUncheckedCreateNestedManyWithoutFeatureInput = {
  connect?: Maybe<Array<Maybe<ImageWhereUniqueInput>>>;
  connectOrCreate?: Maybe<Array<Maybe<ImageCreateOrConnectWithoutFeatureInput>>>;
  create?: Maybe<Array<Maybe<ImageCreateWithoutFeatureInput>>>;
  createMany?: Maybe<ImageCreateManyFeatureInputEnvelope>;
};

export type ImageUncheckedCreateNestedManyWithoutStudentInput = {
  connect?: Maybe<Array<Maybe<ImageWhereUniqueInput>>>;
  connectOrCreate?: Maybe<Array<Maybe<ImageCreateOrConnectWithoutStudentInput>>>;
  create?: Maybe<Array<Maybe<ImageCreateWithoutStudentInput>>>;
  createMany?: Maybe<ImageCreateManyStudentInputEnvelope>;
};

export type ImageUncheckedCreateNestedManyWithoutTeacherInput = {
  connect?: Maybe<Array<Maybe<ImageWhereUniqueInput>>>;
  connectOrCreate?: Maybe<Array<Maybe<ImageCreateOrConnectWithoutTeacherInput>>>;
  create?: Maybe<Array<Maybe<ImageCreateWithoutTeacherInput>>>;
  createMany?: Maybe<ImageCreateManyTeacherInputEnvelope>;
};

export type ImageUncheckedCreateWithoutFeatureInput = {
  contentType: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  filename: Scalars['String'];
  id?: Maybe<Scalars['Int']>;
  name: Scalars['String'];
  size: Scalars['Int'];
  storage?: Maybe<Scalars['String']>;
  studentId?: Maybe<Scalars['Int']>;
  teacherId?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  url: Scalars['String'];
};

export type ImageUncheckedCreateWithoutStudentInput = {
  contentType: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  featureId?: Maybe<Scalars['Int']>;
  filename: Scalars['String'];
  id?: Maybe<Scalars['Int']>;
  name: Scalars['String'];
  size: Scalars['Int'];
  storage?: Maybe<Scalars['String']>;
  teacherId?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  url: Scalars['String'];
};

export type ImageUncheckedCreateWithoutTeacherInput = {
  contentType: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  featureId?: Maybe<Scalars['Int']>;
  filename: Scalars['String'];
  id?: Maybe<Scalars['Int']>;
  name: Scalars['String'];
  size: Scalars['Int'];
  storage?: Maybe<Scalars['String']>;
  studentId?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  url: Scalars['String'];
};

export type ImageUncheckedUpdateInput = {
  contentType?: Maybe<StringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  featureId?: Maybe<NullableIntFieldUpdateOperationsInput>;
  filename?: Maybe<StringFieldUpdateOperationsInput>;
  id?: Maybe<IntFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  size?: Maybe<IntFieldUpdateOperationsInput>;
  storage?: Maybe<StringFieldUpdateOperationsInput>;
  studentId?: Maybe<NullableIntFieldUpdateOperationsInput>;
  teacherId?: Maybe<NullableIntFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  url?: Maybe<StringFieldUpdateOperationsInput>;
};

export type ImageUncheckedUpdateManyInput = {
  contentType?: Maybe<StringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  featureId?: Maybe<NullableIntFieldUpdateOperationsInput>;
  filename?: Maybe<StringFieldUpdateOperationsInput>;
  id?: Maybe<IntFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  size?: Maybe<IntFieldUpdateOperationsInput>;
  storage?: Maybe<StringFieldUpdateOperationsInput>;
  studentId?: Maybe<NullableIntFieldUpdateOperationsInput>;
  teacherId?: Maybe<NullableIntFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  url?: Maybe<StringFieldUpdateOperationsInput>;
};

export type ImageUncheckedUpdateManyWithoutFeatureInput = {
  connect?: Maybe<Array<Maybe<ImageWhereUniqueInput>>>;
  connectOrCreate?: Maybe<Array<Maybe<ImageCreateOrConnectWithoutFeatureInput>>>;
  create?: Maybe<Array<Maybe<ImageCreateWithoutFeatureInput>>>;
  createMany?: Maybe<ImageCreateManyFeatureInputEnvelope>;
  delete?: Maybe<Array<Maybe<ImageWhereUniqueInput>>>;
  deleteMany?: Maybe<Array<Maybe<ImageScalarWhereInput>>>;
  disconnect?: Maybe<Array<Maybe<ImageWhereUniqueInput>>>;
  set?: Maybe<Array<Maybe<ImageWhereUniqueInput>>>;
  update?: Maybe<Array<Maybe<ImageUpdateWithWhereUniqueWithoutFeatureInput>>>;
  updateMany?: Maybe<Array<Maybe<ImageUpdateManyWithWhereWithoutFeatureInput>>>;
  upsert?: Maybe<Array<Maybe<ImageUpsertWithWhereUniqueWithoutFeatureInput>>>;
};

export type ImageUncheckedUpdateManyWithoutImagesInput = {
  contentType?: Maybe<StringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  featureId?: Maybe<NullableIntFieldUpdateOperationsInput>;
  filename?: Maybe<StringFieldUpdateOperationsInput>;
  id?: Maybe<IntFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  size?: Maybe<IntFieldUpdateOperationsInput>;
  storage?: Maybe<StringFieldUpdateOperationsInput>;
  teacherId?: Maybe<NullableIntFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  url?: Maybe<StringFieldUpdateOperationsInput>;
};

export type ImageUncheckedUpdateManyWithoutStudentInput = {
  connect?: Maybe<Array<Maybe<ImageWhereUniqueInput>>>;
  connectOrCreate?: Maybe<Array<Maybe<ImageCreateOrConnectWithoutStudentInput>>>;
  create?: Maybe<Array<Maybe<ImageCreateWithoutStudentInput>>>;
  createMany?: Maybe<ImageCreateManyStudentInputEnvelope>;
  delete?: Maybe<Array<Maybe<ImageWhereUniqueInput>>>;
  deleteMany?: Maybe<Array<Maybe<ImageScalarWhereInput>>>;
  disconnect?: Maybe<Array<Maybe<ImageWhereUniqueInput>>>;
  set?: Maybe<Array<Maybe<ImageWhereUniqueInput>>>;
  update?: Maybe<Array<Maybe<ImageUpdateWithWhereUniqueWithoutStudentInput>>>;
  updateMany?: Maybe<Array<Maybe<ImageUpdateManyWithWhereWithoutStudentInput>>>;
  upsert?: Maybe<Array<Maybe<ImageUpsertWithWhereUniqueWithoutStudentInput>>>;
};

export type ImageUncheckedUpdateManyWithoutTeacherInput = {
  connect?: Maybe<Array<Maybe<ImageWhereUniqueInput>>>;
  connectOrCreate?: Maybe<Array<Maybe<ImageCreateOrConnectWithoutTeacherInput>>>;
  create?: Maybe<Array<Maybe<ImageCreateWithoutTeacherInput>>>;
  createMany?: Maybe<ImageCreateManyTeacherInputEnvelope>;
  delete?: Maybe<Array<Maybe<ImageWhereUniqueInput>>>;
  deleteMany?: Maybe<Array<Maybe<ImageScalarWhereInput>>>;
  disconnect?: Maybe<Array<Maybe<ImageWhereUniqueInput>>>;
  set?: Maybe<Array<Maybe<ImageWhereUniqueInput>>>;
  update?: Maybe<Array<Maybe<ImageUpdateWithWhereUniqueWithoutTeacherInput>>>;
  updateMany?: Maybe<Array<Maybe<ImageUpdateManyWithWhereWithoutTeacherInput>>>;
  upsert?: Maybe<Array<Maybe<ImageUpsertWithWhereUniqueWithoutTeacherInput>>>;
};

export type ImageUncheckedUpdateWithoutFeatureInput = {
  contentType?: Maybe<StringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  filename?: Maybe<StringFieldUpdateOperationsInput>;
  id?: Maybe<IntFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  size?: Maybe<IntFieldUpdateOperationsInput>;
  storage?: Maybe<StringFieldUpdateOperationsInput>;
  studentId?: Maybe<NullableIntFieldUpdateOperationsInput>;
  teacherId?: Maybe<NullableIntFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  url?: Maybe<StringFieldUpdateOperationsInput>;
};

export type ImageUncheckedUpdateWithoutStudentInput = {
  contentType?: Maybe<StringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  featureId?: Maybe<NullableIntFieldUpdateOperationsInput>;
  filename?: Maybe<StringFieldUpdateOperationsInput>;
  id?: Maybe<IntFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  size?: Maybe<IntFieldUpdateOperationsInput>;
  storage?: Maybe<StringFieldUpdateOperationsInput>;
  teacherId?: Maybe<NullableIntFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  url?: Maybe<StringFieldUpdateOperationsInput>;
};

export type ImageUncheckedUpdateWithoutTeacherInput = {
  contentType?: Maybe<StringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  featureId?: Maybe<NullableIntFieldUpdateOperationsInput>;
  filename?: Maybe<StringFieldUpdateOperationsInput>;
  id?: Maybe<IntFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  size?: Maybe<IntFieldUpdateOperationsInput>;
  storage?: Maybe<StringFieldUpdateOperationsInput>;
  studentId?: Maybe<NullableIntFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  url?: Maybe<StringFieldUpdateOperationsInput>;
};

export type ImageUpdateInput = {
  contentType?: Maybe<StringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  feature?: Maybe<FeatureUpdateOneWithoutImagesInput>;
  filename?: Maybe<StringFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  size?: Maybe<IntFieldUpdateOperationsInput>;
  storage?: Maybe<StringFieldUpdateOperationsInput>;
  student?: Maybe<StudentUpdateOneWithoutImagesInput>;
  teacher?: Maybe<TeacherUpdateOneWithoutImagesInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  url?: Maybe<StringFieldUpdateOperationsInput>;
};

export type ImageUpdateManyMutationInput = {
  contentType?: Maybe<StringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  filename?: Maybe<StringFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  size?: Maybe<IntFieldUpdateOperationsInput>;
  storage?: Maybe<StringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  url?: Maybe<StringFieldUpdateOperationsInput>;
};

export type ImageUpdateManyWithWhereWithoutFeatureInput = {
  data: ImageUncheckedUpdateManyWithoutImagesInput;
  where: ImageScalarWhereInput;
};

export type ImageUpdateManyWithWhereWithoutStudentInput = {
  data: ImageUncheckedUpdateManyWithoutImagesInput;
  where: ImageScalarWhereInput;
};

export type ImageUpdateManyWithWhereWithoutTeacherInput = {
  data: ImageUncheckedUpdateManyWithoutImagesInput;
  where: ImageScalarWhereInput;
};

export type ImageUpdateManyWithoutFeatureInput = {
  connect?: Maybe<Array<Maybe<ImageWhereUniqueInput>>>;
  connectOrCreate?: Maybe<Array<Maybe<ImageCreateOrConnectWithoutFeatureInput>>>;
  create?: Maybe<Array<Maybe<ImageCreateWithoutFeatureInput>>>;
  createMany?: Maybe<ImageCreateManyFeatureInputEnvelope>;
  delete?: Maybe<Array<Maybe<ImageWhereUniqueInput>>>;
  deleteMany?: Maybe<Array<Maybe<ImageScalarWhereInput>>>;
  disconnect?: Maybe<Array<Maybe<ImageWhereUniqueInput>>>;
  set?: Maybe<Array<Maybe<ImageWhereUniqueInput>>>;
  update?: Maybe<Array<Maybe<ImageUpdateWithWhereUniqueWithoutFeatureInput>>>;
  updateMany?: Maybe<Array<Maybe<ImageUpdateManyWithWhereWithoutFeatureInput>>>;
  upsert?: Maybe<Array<Maybe<ImageUpsertWithWhereUniqueWithoutFeatureInput>>>;
};

export type ImageUpdateManyWithoutStudentInput = {
  connect?: Maybe<Array<Maybe<ImageWhereUniqueInput>>>;
  connectOrCreate?: Maybe<Array<Maybe<ImageCreateOrConnectWithoutStudentInput>>>;
  create?: Maybe<Array<Maybe<ImageCreateWithoutStudentInput>>>;
  createMany?: Maybe<ImageCreateManyStudentInputEnvelope>;
  delete?: Maybe<Array<Maybe<ImageWhereUniqueInput>>>;
  deleteMany?: Maybe<Array<Maybe<ImageScalarWhereInput>>>;
  disconnect?: Maybe<Array<Maybe<ImageWhereUniqueInput>>>;
  set?: Maybe<Array<Maybe<ImageWhereUniqueInput>>>;
  update?: Maybe<Array<Maybe<ImageUpdateWithWhereUniqueWithoutStudentInput>>>;
  updateMany?: Maybe<Array<Maybe<ImageUpdateManyWithWhereWithoutStudentInput>>>;
  upsert?: Maybe<Array<Maybe<ImageUpsertWithWhereUniqueWithoutStudentInput>>>;
};

export type ImageUpdateManyWithoutTeacherInput = {
  connect?: Maybe<Array<Maybe<ImageWhereUniqueInput>>>;
  connectOrCreate?: Maybe<Array<Maybe<ImageCreateOrConnectWithoutTeacherInput>>>;
  create?: Maybe<Array<Maybe<ImageCreateWithoutTeacherInput>>>;
  createMany?: Maybe<ImageCreateManyTeacherInputEnvelope>;
  delete?: Maybe<Array<Maybe<ImageWhereUniqueInput>>>;
  deleteMany?: Maybe<Array<Maybe<ImageScalarWhereInput>>>;
  disconnect?: Maybe<Array<Maybe<ImageWhereUniqueInput>>>;
  set?: Maybe<Array<Maybe<ImageWhereUniqueInput>>>;
  update?: Maybe<Array<Maybe<ImageUpdateWithWhereUniqueWithoutTeacherInput>>>;
  updateMany?: Maybe<Array<Maybe<ImageUpdateManyWithWhereWithoutTeacherInput>>>;
  upsert?: Maybe<Array<Maybe<ImageUpsertWithWhereUniqueWithoutTeacherInput>>>;
};

export type ImageUpdateWithWhereUniqueWithoutFeatureInput = {
  data: ImageUncheckedUpdateWithoutFeatureInput;
  where: ImageWhereUniqueInput;
};

export type ImageUpdateWithWhereUniqueWithoutStudentInput = {
  data: ImageUncheckedUpdateWithoutStudentInput;
  where: ImageWhereUniqueInput;
};

export type ImageUpdateWithWhereUniqueWithoutTeacherInput = {
  data: ImageUncheckedUpdateWithoutTeacherInput;
  where: ImageWhereUniqueInput;
};

export type ImageUpdateWithoutFeatureInput = {
  contentType?: Maybe<StringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  filename?: Maybe<StringFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  size?: Maybe<IntFieldUpdateOperationsInput>;
  storage?: Maybe<StringFieldUpdateOperationsInput>;
  student?: Maybe<StudentUpdateOneWithoutImagesInput>;
  teacher?: Maybe<TeacherUpdateOneWithoutImagesInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  url?: Maybe<StringFieldUpdateOperationsInput>;
};

export type ImageUpdateWithoutStudentInput = {
  contentType?: Maybe<StringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  feature?: Maybe<FeatureUpdateOneWithoutImagesInput>;
  filename?: Maybe<StringFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  size?: Maybe<IntFieldUpdateOperationsInput>;
  storage?: Maybe<StringFieldUpdateOperationsInput>;
  teacher?: Maybe<TeacherUpdateOneWithoutImagesInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  url?: Maybe<StringFieldUpdateOperationsInput>;
};

export type ImageUpdateWithoutTeacherInput = {
  contentType?: Maybe<StringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  feature?: Maybe<FeatureUpdateOneWithoutImagesInput>;
  filename?: Maybe<StringFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  size?: Maybe<IntFieldUpdateOperationsInput>;
  storage?: Maybe<StringFieldUpdateOperationsInput>;
  student?: Maybe<StudentUpdateOneWithoutImagesInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  url?: Maybe<StringFieldUpdateOperationsInput>;
};

export type ImageUpsertWithWhereUniqueWithoutFeatureInput = {
  create: ImageUncheckedCreateWithoutFeatureInput;
  update: ImageUncheckedUpdateWithoutFeatureInput;
  where: ImageWhereUniqueInput;
};

export type ImageUpsertWithWhereUniqueWithoutStudentInput = {
  create: ImageUncheckedCreateWithoutStudentInput;
  update: ImageUncheckedUpdateWithoutStudentInput;
  where: ImageWhereUniqueInput;
};

export type ImageUpsertWithWhereUniqueWithoutTeacherInput = {
  create: ImageUncheckedCreateWithoutTeacherInput;
  update: ImageUncheckedUpdateWithoutTeacherInput;
  where: ImageWhereUniqueInput;
};

export type ImageWhereInput = {
  AND?: Maybe<Array<Maybe<ImageWhereInput>>>;
  NOT?: Maybe<Array<Maybe<ImageWhereInput>>>;
  OR?: Maybe<Array<Maybe<ImageWhereInput>>>;
  contentType?: Maybe<StringFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  feature?: Maybe<FeatureWhereInput>;
  featureId?: Maybe<IntNullableFilter>;
  filename?: Maybe<StringFilter>;
  id?: Maybe<IntFilter>;
  name?: Maybe<StringFilter>;
  size?: Maybe<IntFilter>;
  storage?: Maybe<StringFilter>;
  student?: Maybe<StudentWhereInput>;
  studentId?: Maybe<IntNullableFilter>;
  teacher?: Maybe<TeacherWhereInput>;
  teacherId?: Maybe<IntNullableFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
  url?: Maybe<StringFilter>;
};

export type ImageWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>;
  url?: Maybe<Scalars['String']>;
};

export type IntFieldUpdateOperationsInput = {
  decrement?: Maybe<Scalars['Int']>;
  divide?: Maybe<Scalars['Int']>;
  increment?: Maybe<Scalars['Int']>;
  multiply?: Maybe<Scalars['Int']>;
  set?: Maybe<Scalars['Int']>;
};

export type IntFilter = {
  equals?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  not?: Maybe<NestedIntFilter>;
  notIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
};

export type IntNullableFilter = {
  equals?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  not?: Maybe<NestedIntNullableFilter>;
  notIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
};

export type IntNullableWithAggregatesFilter = {
  _avg?: Maybe<NestedFloatNullableFilter>;
  _count?: Maybe<NestedIntNullableFilter>;
  _max?: Maybe<NestedIntNullableFilter>;
  _min?: Maybe<NestedIntNullableFilter>;
  _sum?: Maybe<NestedIntNullableFilter>;
  equals?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  not?: Maybe<NestedIntNullableWithAggregatesFilter>;
  notIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
};

export type IntWithAggregatesFilter = {
  _avg?: Maybe<NestedFloatFilter>;
  _count?: Maybe<NestedIntFilter>;
  _max?: Maybe<NestedIntFilter>;
  _min?: Maybe<NestedIntFilter>;
  _sum?: Maybe<NestedIntFilter>;
  equals?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  not?: Maybe<NestedIntWithAggregatesFilter>;
  notIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
};

export enum KindEnum {
  Enum = 'enum',
  Object = 'object',
  Scalar = 'scalar'
}

export type Model = {
  __typename?: 'Model';
  create: Scalars['Boolean'];
  delete: Scalars['Boolean'];
  displayFields: Array<Scalars['String']>;
  fields: Array<Field>;
  id: Scalars['String'];
  idField: Scalars['String'];
  name: Scalars['String'];
  update: Scalars['Boolean'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createOneCity: City;
  createOneFaq: Faq;
  createOneFeature: Feature;
  createOneImage: Image;
  createOneProgram: Program;
  createOneSchool: School;
  createOneStudent: Student;
  createOneSubject: Subject;
  createOneTeacher: Teacher;
  createOneUser: User;
  deleteManyCity: BatchPayload;
  deleteManyFaq: BatchPayload;
  deleteManyFeature: BatchPayload;
  deleteManyImage: BatchPayload;
  deleteManyProgram: BatchPayload;
  deleteManySchool: BatchPayload;
  deleteManyStudent: BatchPayload;
  deleteManySubject: BatchPayload;
  deleteManyTeacher: BatchPayload;
  deleteManyUser: BatchPayload;
  deleteOneCity?: Maybe<City>;
  deleteOneFaq?: Maybe<Faq>;
  deleteOneFeature?: Maybe<Feature>;
  deleteOneImage?: Maybe<Image>;
  deleteOneProgram?: Maybe<Program>;
  deleteOneSchool?: Maybe<School>;
  deleteOneStudent?: Maybe<Student>;
  deleteOneSubject?: Maybe<Subject>;
  deleteOneTeacher?: Maybe<Teacher>;
  deleteOneUser?: Maybe<User>;
  login?: Maybe<User>;
  logout?: Maybe<Scalars['Boolean']>;
  signup?: Maybe<User>;
  updateField: Field;
  updateManyCity: BatchPayload;
  updateManyFaq: BatchPayload;
  updateManyFeature: BatchPayload;
  updateManyImage: BatchPayload;
  updateManyProgram: BatchPayload;
  updateManySchool: BatchPayload;
  updateManyStudent: BatchPayload;
  updateManySubject: BatchPayload;
  updateManyTeacher: BatchPayload;
  updateManyUser: BatchPayload;
  updateModel: Model;
  updateOneCity: City;
  updateOneFaq: Faq;
  updateOneFeature: Feature;
  updateOneImage: Image;
  updateOneProgram: Program;
  updateOneSchool: School;
  updateOneStudent: Student;
  updateOneSubject: Subject;
  updateOneTeacher: Teacher;
  updateOneUser: User;
  updatePassword?: Maybe<Scalars['Boolean']>;
  upsertOneCity: City;
  upsertOneFaq: Faq;
  upsertOneFeature: Feature;
  upsertOneImage: Image;
  upsertOneProgram: Program;
  upsertOneSchool: School;
  upsertOneStudent: Student;
  upsertOneSubject: Subject;
  upsertOneTeacher: Teacher;
  upsertOneUser: User;
};


export type MutationCreateOneCityArgs = {
  data: CityCreateInput;
};


export type MutationCreateOneFaqArgs = {
  data: FaqCreateInput;
};


export type MutationCreateOneFeatureArgs = {
  data: FeatureCreateInput;
};


export type MutationCreateOneImageArgs = {
  data: ImageCreateInput;
};


export type MutationCreateOneProgramArgs = {
  data: ProgramCreateInput;
};


export type MutationCreateOneSchoolArgs = {
  data: SchoolCreateInput;
};


export type MutationCreateOneStudentArgs = {
  data: StudentCreateInput;
};


export type MutationCreateOneSubjectArgs = {
  data: SubjectCreateInput;
};


export type MutationCreateOneTeacherArgs = {
  data: TeacherCreateInput;
};


export type MutationCreateOneUserArgs = {
  data: UserCreateInput;
};


export type MutationDeleteManyCityArgs = {
  where?: Maybe<CityWhereInput>;
};


export type MutationDeleteManyFaqArgs = {
  where?: Maybe<FaqWhereInput>;
};


export type MutationDeleteManyFeatureArgs = {
  where?: Maybe<FeatureWhereInput>;
};


export type MutationDeleteManyImageArgs = {
  where?: Maybe<ImageWhereInput>;
};


export type MutationDeleteManyProgramArgs = {
  where?: Maybe<ProgramWhereInput>;
};


export type MutationDeleteManySchoolArgs = {
  where?: Maybe<SchoolWhereInput>;
};


export type MutationDeleteManyStudentArgs = {
  where?: Maybe<StudentWhereInput>;
};


export type MutationDeleteManySubjectArgs = {
  where?: Maybe<SubjectWhereInput>;
};


export type MutationDeleteManyTeacherArgs = {
  where?: Maybe<TeacherWhereInput>;
};


export type MutationDeleteManyUserArgs = {
  where?: Maybe<UserWhereInput>;
};


export type MutationDeleteOneCityArgs = {
  where: CityWhereUniqueInput;
};


export type MutationDeleteOneFaqArgs = {
  where: FaqWhereUniqueInput;
};


export type MutationDeleteOneFeatureArgs = {
  where: FeatureWhereUniqueInput;
};


export type MutationDeleteOneImageArgs = {
  where: ImageWhereUniqueInput;
};


export type MutationDeleteOneProgramArgs = {
  where: ProgramWhereUniqueInput;
};


export type MutationDeleteOneSchoolArgs = {
  where: SchoolWhereUniqueInput;
};


export type MutationDeleteOneStudentArgs = {
  where: StudentWhereUniqueInput;
};


export type MutationDeleteOneSubjectArgs = {
  where: SubjectWhereUniqueInput;
};


export type MutationDeleteOneTeacherArgs = {
  where: TeacherWhereUniqueInput;
};


export type MutationDeleteOneUserArgs = {
  where: UserWhereUniqueInput;
};


export type MutationLoginArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};


export type MutationSignupArgs = {
  email: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  password: Scalars['String'];
};


export type MutationUpdateFieldArgs = {
  data: UpdateFieldInput;
  id: Scalars['String'];
  modelId: Scalars['String'];
};


export type MutationUpdateManyCityArgs = {
  data: CityUpdateManyMutationInput;
  where?: Maybe<CityWhereInput>;
};


export type MutationUpdateManyFaqArgs = {
  data: FaqUpdateManyMutationInput;
  where?: Maybe<FaqWhereInput>;
};


export type MutationUpdateManyFeatureArgs = {
  data: FeatureUpdateManyMutationInput;
  where?: Maybe<FeatureWhereInput>;
};


export type MutationUpdateManyImageArgs = {
  data: ImageUpdateManyMutationInput;
  where?: Maybe<ImageWhereInput>;
};


export type MutationUpdateManyProgramArgs = {
  data: ProgramUpdateManyMutationInput;
  where?: Maybe<ProgramWhereInput>;
};


export type MutationUpdateManySchoolArgs = {
  data: SchoolUpdateManyMutationInput;
  where?: Maybe<SchoolWhereInput>;
};


export type MutationUpdateManyStudentArgs = {
  data: StudentUpdateManyMutationInput;
  where?: Maybe<StudentWhereInput>;
};


export type MutationUpdateManySubjectArgs = {
  data: SubjectUpdateManyMutationInput;
  where?: Maybe<SubjectWhereInput>;
};


export type MutationUpdateManyTeacherArgs = {
  data: TeacherUpdateManyMutationInput;
  where?: Maybe<TeacherWhereInput>;
};


export type MutationUpdateManyUserArgs = {
  data: UserUpdateManyMutationInput;
  where?: Maybe<UserWhereInput>;
};


export type MutationUpdateModelArgs = {
  data: UpdateModelInput;
  id: Scalars['String'];
};


export type MutationUpdateOneCityArgs = {
  data: CityUpdateInput;
  where: CityWhereUniqueInput;
};


export type MutationUpdateOneFaqArgs = {
  data: FaqUpdateInput;
  where: FaqWhereUniqueInput;
};


export type MutationUpdateOneFeatureArgs = {
  data: FeatureUpdateInput;
  where: FeatureWhereUniqueInput;
};


export type MutationUpdateOneImageArgs = {
  data: ImageUpdateInput;
  where: ImageWhereUniqueInput;
};


export type MutationUpdateOneProgramArgs = {
  data: ProgramUpdateInput;
  where: ProgramWhereUniqueInput;
};


export type MutationUpdateOneSchoolArgs = {
  data: SchoolUpdateInput;
  where: SchoolWhereUniqueInput;
};


export type MutationUpdateOneStudentArgs = {
  data: StudentUpdateInput;
  where: StudentWhereUniqueInput;
};


export type MutationUpdateOneSubjectArgs = {
  data: SubjectUpdateInput;
  where: SubjectWhereUniqueInput;
};


export type MutationUpdateOneTeacherArgs = {
  data: TeacherUpdateInput;
  where: TeacherWhereUniqueInput;
};


export type MutationUpdateOneUserArgs = {
  data: UserUpdateInput;
  where: UserWhereUniqueInput;
};


export type MutationUpdatePasswordArgs = {
  currentPassword: Scalars['String'];
  password: Scalars['String'];
};


export type MutationUpsertOneCityArgs = {
  create: CityCreateInput;
  update: CityUpdateInput;
  where: CityWhereUniqueInput;
};


export type MutationUpsertOneFaqArgs = {
  create: FaqCreateInput;
  update: FaqUpdateInput;
  where: FaqWhereUniqueInput;
};


export type MutationUpsertOneFeatureArgs = {
  create: FeatureCreateInput;
  update: FeatureUpdateInput;
  where: FeatureWhereUniqueInput;
};


export type MutationUpsertOneImageArgs = {
  create: ImageCreateInput;
  update: ImageUpdateInput;
  where: ImageWhereUniqueInput;
};


export type MutationUpsertOneProgramArgs = {
  create: ProgramCreateInput;
  update: ProgramUpdateInput;
  where: ProgramWhereUniqueInput;
};


export type MutationUpsertOneSchoolArgs = {
  create: SchoolCreateInput;
  update: SchoolUpdateInput;
  where: SchoolWhereUniqueInput;
};


export type MutationUpsertOneStudentArgs = {
  create: StudentCreateInput;
  update: StudentUpdateInput;
  where: StudentWhereUniqueInput;
};


export type MutationUpsertOneSubjectArgs = {
  create: SubjectCreateInput;
  update: SubjectUpdateInput;
  where: SubjectWhereUniqueInput;
};


export type MutationUpsertOneTeacherArgs = {
  create: TeacherCreateInput;
  update: TeacherUpdateInput;
  where: TeacherWhereUniqueInput;
};


export type MutationUpsertOneUserArgs = {
  create: UserCreateInput;
  update: UserUpdateInput;
  where: UserWhereUniqueInput;
};

export type NestedBoolFilter = {
  equals?: Maybe<Scalars['Boolean']>;
  not?: Maybe<NestedBoolFilter>;
};

export type NestedBoolWithAggregatesFilter = {
  _count?: Maybe<NestedIntFilter>;
  _max?: Maybe<NestedBoolFilter>;
  _min?: Maybe<NestedBoolFilter>;
  equals?: Maybe<Scalars['Boolean']>;
  not?: Maybe<NestedBoolWithAggregatesFilter>;
};

export type NestedDateTimeFilter = {
  equals?: Maybe<Scalars['DateTime']>;
  gt?: Maybe<Scalars['DateTime']>;
  gte?: Maybe<Scalars['DateTime']>;
  in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  lt?: Maybe<Scalars['DateTime']>;
  lte?: Maybe<Scalars['DateTime']>;
  not?: Maybe<NestedDateTimeFilter>;
  notIn?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
};

export type NestedDateTimeWithAggregatesFilter = {
  _count?: Maybe<NestedIntFilter>;
  _max?: Maybe<NestedDateTimeFilter>;
  _min?: Maybe<NestedDateTimeFilter>;
  equals?: Maybe<Scalars['DateTime']>;
  gt?: Maybe<Scalars['DateTime']>;
  gte?: Maybe<Scalars['DateTime']>;
  in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  lt?: Maybe<Scalars['DateTime']>;
  lte?: Maybe<Scalars['DateTime']>;
  not?: Maybe<NestedDateTimeWithAggregatesFilter>;
  notIn?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
};

export type NestedFloatFilter = {
  equals?: Maybe<Scalars['Float']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  not?: Maybe<NestedFloatFilter>;
  notIn?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export type NestedFloatNullableFilter = {
  equals?: Maybe<Scalars['Float']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  not?: Maybe<NestedFloatNullableFilter>;
  notIn?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export type NestedIntFilter = {
  equals?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  not?: Maybe<NestedIntFilter>;
  notIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
};

export type NestedIntNullableFilter = {
  equals?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  not?: Maybe<NestedIntNullableFilter>;
  notIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
};

export type NestedIntNullableWithAggregatesFilter = {
  _avg?: Maybe<NestedFloatNullableFilter>;
  _count?: Maybe<NestedIntNullableFilter>;
  _max?: Maybe<NestedIntNullableFilter>;
  _min?: Maybe<NestedIntNullableFilter>;
  _sum?: Maybe<NestedIntNullableFilter>;
  equals?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  not?: Maybe<NestedIntNullableWithAggregatesFilter>;
  notIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
};

export type NestedIntWithAggregatesFilter = {
  _avg?: Maybe<NestedFloatFilter>;
  _count?: Maybe<NestedIntFilter>;
  _max?: Maybe<NestedIntFilter>;
  _min?: Maybe<NestedIntFilter>;
  _sum?: Maybe<NestedIntFilter>;
  equals?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  not?: Maybe<NestedIntWithAggregatesFilter>;
  notIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
};

export type NestedStringFilter = {
  contains?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  equals?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  not?: Maybe<NestedStringFilter>;
  notIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  startsWith?: Maybe<Scalars['String']>;
};

export type NestedStringNullableFilter = {
  contains?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  equals?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  not?: Maybe<NestedStringNullableFilter>;
  notIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  startsWith?: Maybe<Scalars['String']>;
};

export type NestedStringNullableWithAggregatesFilter = {
  _count?: Maybe<NestedIntNullableFilter>;
  _max?: Maybe<NestedStringNullableFilter>;
  _min?: Maybe<NestedStringNullableFilter>;
  contains?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  equals?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  not?: Maybe<NestedStringNullableWithAggregatesFilter>;
  notIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  startsWith?: Maybe<Scalars['String']>;
};

export type NestedStringWithAggregatesFilter = {
  _count?: Maybe<NestedIntFilter>;
  _max?: Maybe<NestedStringFilter>;
  _min?: Maybe<NestedStringFilter>;
  contains?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  equals?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  not?: Maybe<NestedStringWithAggregatesFilter>;
  notIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  startsWith?: Maybe<Scalars['String']>;
};

export type NullableIntFieldUpdateOperationsInput = {
  decrement?: Maybe<Scalars['Int']>;
  divide?: Maybe<Scalars['Int']>;
  increment?: Maybe<Scalars['Int']>;
  multiply?: Maybe<Scalars['Int']>;
  set?: Maybe<Scalars['Int']>;
};

export type NullableStringFieldUpdateOperationsInput = {
  set?: Maybe<Scalars['String']>;
};

export type Program = {
  __typename?: 'Program';
  createdAt: Scalars['DateTime'];
  descriptionEn: Scalars['String'];
  descriptionKz: Scalars['String'];
  descriptionRu: Scalars['String'];
  id: Scalars['Int'];
  school: School;
  schoolId: Scalars['Int'];
  titleEn: Scalars['String'];
  titleKz: Scalars['String'];
  titleRu: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type ProgramAvgAggregateOutputType = {
  __typename?: 'ProgramAvgAggregateOutputType';
  id?: Maybe<Scalars['Float']>;
  schoolId?: Maybe<Scalars['Float']>;
};

export type ProgramAvgOrderByAggregateInput = {
  id?: Maybe<SortOrder>;
  schoolId?: Maybe<SortOrder>;
};

export type ProgramCountAggregateOutputType = {
  __typename?: 'ProgramCountAggregateOutputType';
  _all: Scalars['Int'];
  createdAt: Scalars['Int'];
  descriptionEn: Scalars['Int'];
  descriptionKz: Scalars['Int'];
  descriptionRu: Scalars['Int'];
  id: Scalars['Int'];
  schoolId: Scalars['Int'];
  titleEn: Scalars['Int'];
  titleKz: Scalars['Int'];
  titleRu: Scalars['Int'];
  updatedAt: Scalars['Int'];
};

export type ProgramCountOrderByAggregateInput = {
  createdAt?: Maybe<SortOrder>;
  descriptionEn?: Maybe<SortOrder>;
  descriptionKz?: Maybe<SortOrder>;
  descriptionRu?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  schoolId?: Maybe<SortOrder>;
  titleEn?: Maybe<SortOrder>;
  titleKz?: Maybe<SortOrder>;
  titleRu?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
};

export type ProgramCreateInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  descriptionEn: Scalars['String'];
  descriptionKz: Scalars['String'];
  descriptionRu: Scalars['String'];
  school: SchoolCreateNestedOneWithoutProgramsInput;
  titleEn: Scalars['String'];
  titleKz: Scalars['String'];
  titleRu: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ProgramCreateManyInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  descriptionEn: Scalars['String'];
  descriptionKz: Scalars['String'];
  descriptionRu: Scalars['String'];
  id?: Maybe<Scalars['Int']>;
  schoolId: Scalars['Int'];
  titleEn: Scalars['String'];
  titleKz: Scalars['String'];
  titleRu: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ProgramCreateManySchoolInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  descriptionEn: Scalars['String'];
  descriptionKz: Scalars['String'];
  descriptionRu: Scalars['String'];
  id?: Maybe<Scalars['Int']>;
  titleEn: Scalars['String'];
  titleKz: Scalars['String'];
  titleRu: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ProgramCreateManySchoolInputEnvelope = {
  data: ProgramCreateManySchoolInput;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type ProgramCreateNestedManyWithoutSchoolInput = {
  connect?: Maybe<Array<Maybe<ProgramWhereUniqueInput>>>;
  connectOrCreate?: Maybe<Array<Maybe<ProgramCreateOrConnectWithoutSchoolInput>>>;
  create?: Maybe<Array<Maybe<ProgramCreateWithoutSchoolInput>>>;
  createMany?: Maybe<ProgramCreateManySchoolInputEnvelope>;
};

export type ProgramCreateOrConnectWithoutSchoolInput = {
  create: ProgramUncheckedCreateWithoutSchoolInput;
  where: ProgramWhereUniqueInput;
};

export type ProgramCreateWithoutSchoolInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  descriptionEn: Scalars['String'];
  descriptionKz: Scalars['String'];
  descriptionRu: Scalars['String'];
  titleEn: Scalars['String'];
  titleKz: Scalars['String'];
  titleRu: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ProgramListRelationFilter = {
  every?: Maybe<ProgramWhereInput>;
  none?: Maybe<ProgramWhereInput>;
  some?: Maybe<ProgramWhereInput>;
};

export type ProgramMaxAggregateOutputType = {
  __typename?: 'ProgramMaxAggregateOutputType';
  createdAt?: Maybe<Scalars['DateTime']>;
  descriptionEn?: Maybe<Scalars['String']>;
  descriptionKz?: Maybe<Scalars['String']>;
  descriptionRu?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  schoolId?: Maybe<Scalars['Int']>;
  titleEn?: Maybe<Scalars['String']>;
  titleKz?: Maybe<Scalars['String']>;
  titleRu?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ProgramMaxOrderByAggregateInput = {
  createdAt?: Maybe<SortOrder>;
  descriptionEn?: Maybe<SortOrder>;
  descriptionKz?: Maybe<SortOrder>;
  descriptionRu?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  schoolId?: Maybe<SortOrder>;
  titleEn?: Maybe<SortOrder>;
  titleKz?: Maybe<SortOrder>;
  titleRu?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
};

export type ProgramMinAggregateOutputType = {
  __typename?: 'ProgramMinAggregateOutputType';
  createdAt?: Maybe<Scalars['DateTime']>;
  descriptionEn?: Maybe<Scalars['String']>;
  descriptionKz?: Maybe<Scalars['String']>;
  descriptionRu?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  schoolId?: Maybe<Scalars['Int']>;
  titleEn?: Maybe<Scalars['String']>;
  titleKz?: Maybe<Scalars['String']>;
  titleRu?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ProgramMinOrderByAggregateInput = {
  createdAt?: Maybe<SortOrder>;
  descriptionEn?: Maybe<SortOrder>;
  descriptionKz?: Maybe<SortOrder>;
  descriptionRu?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  schoolId?: Maybe<SortOrder>;
  titleEn?: Maybe<SortOrder>;
  titleKz?: Maybe<SortOrder>;
  titleRu?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
};

export type ProgramOrderByRelationAggregateInput = {
  _count?: Maybe<SortOrder>;
};

export type ProgramOrderByWithAggregationInput = {
  _avg?: Maybe<ProgramAvgOrderByAggregateInput>;
  _count?: Maybe<ProgramCountOrderByAggregateInput>;
  _max?: Maybe<ProgramMaxOrderByAggregateInput>;
  _min?: Maybe<ProgramMinOrderByAggregateInput>;
  _sum?: Maybe<ProgramSumOrderByAggregateInput>;
  createdAt?: Maybe<SortOrder>;
  descriptionEn?: Maybe<SortOrder>;
  descriptionKz?: Maybe<SortOrder>;
  descriptionRu?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  schoolId?: Maybe<SortOrder>;
  titleEn?: Maybe<SortOrder>;
  titleKz?: Maybe<SortOrder>;
  titleRu?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
};

export type ProgramOrderByWithRelationInput = {
  createdAt?: Maybe<SortOrder>;
  descriptionEn?: Maybe<SortOrder>;
  descriptionKz?: Maybe<SortOrder>;
  descriptionRu?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  school?: Maybe<SchoolOrderByWithRelationInput>;
  schoolId?: Maybe<SortOrder>;
  titleEn?: Maybe<SortOrder>;
  titleKz?: Maybe<SortOrder>;
  titleRu?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
};

export enum ProgramScalarFieldEnum {
  CreatedAt = 'createdAt',
  DescriptionEn = 'descriptionEn',
  DescriptionKz = 'descriptionKz',
  DescriptionRu = 'descriptionRu',
  Id = 'id',
  SchoolId = 'schoolId',
  TitleEn = 'titleEn',
  TitleKz = 'titleKz',
  TitleRu = 'titleRu',
  UpdatedAt = 'updatedAt'
}

export type ProgramScalarWhereInput = {
  AND?: Maybe<Array<Maybe<ProgramScalarWhereInput>>>;
  NOT?: Maybe<Array<Maybe<ProgramScalarWhereInput>>>;
  OR?: Maybe<Array<Maybe<ProgramScalarWhereInput>>>;
  createdAt?: Maybe<DateTimeFilter>;
  descriptionEn?: Maybe<StringFilter>;
  descriptionKz?: Maybe<StringFilter>;
  descriptionRu?: Maybe<StringFilter>;
  id?: Maybe<IntFilter>;
  schoolId?: Maybe<IntFilter>;
  titleEn?: Maybe<StringFilter>;
  titleKz?: Maybe<StringFilter>;
  titleRu?: Maybe<StringFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
};

export type ProgramScalarWhereWithAggregatesInput = {
  AND?: Maybe<Array<Maybe<ProgramScalarWhereWithAggregatesInput>>>;
  NOT?: Maybe<Array<Maybe<ProgramScalarWhereWithAggregatesInput>>>;
  OR?: Maybe<Array<Maybe<ProgramScalarWhereWithAggregatesInput>>>;
  createdAt?: Maybe<DateTimeWithAggregatesFilter>;
  descriptionEn?: Maybe<StringWithAggregatesFilter>;
  descriptionKz?: Maybe<StringWithAggregatesFilter>;
  descriptionRu?: Maybe<StringWithAggregatesFilter>;
  id?: Maybe<IntWithAggregatesFilter>;
  schoolId?: Maybe<IntWithAggregatesFilter>;
  titleEn?: Maybe<StringWithAggregatesFilter>;
  titleKz?: Maybe<StringWithAggregatesFilter>;
  titleRu?: Maybe<StringWithAggregatesFilter>;
  updatedAt?: Maybe<DateTimeWithAggregatesFilter>;
};

export type ProgramSumAggregateOutputType = {
  __typename?: 'ProgramSumAggregateOutputType';
  id?: Maybe<Scalars['Int']>;
  schoolId?: Maybe<Scalars['Int']>;
};

export type ProgramSumOrderByAggregateInput = {
  id?: Maybe<SortOrder>;
  schoolId?: Maybe<SortOrder>;
};

export type ProgramUncheckedCreateInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  descriptionEn: Scalars['String'];
  descriptionKz: Scalars['String'];
  descriptionRu: Scalars['String'];
  id?: Maybe<Scalars['Int']>;
  schoolId: Scalars['Int'];
  titleEn: Scalars['String'];
  titleKz: Scalars['String'];
  titleRu: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ProgramUncheckedCreateNestedManyWithoutSchoolInput = {
  connect?: Maybe<Array<Maybe<ProgramWhereUniqueInput>>>;
  connectOrCreate?: Maybe<Array<Maybe<ProgramCreateOrConnectWithoutSchoolInput>>>;
  create?: Maybe<Array<Maybe<ProgramCreateWithoutSchoolInput>>>;
  createMany?: Maybe<ProgramCreateManySchoolInputEnvelope>;
};

export type ProgramUncheckedCreateWithoutSchoolInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  descriptionEn: Scalars['String'];
  descriptionKz: Scalars['String'];
  descriptionRu: Scalars['String'];
  id?: Maybe<Scalars['Int']>;
  titleEn: Scalars['String'];
  titleKz: Scalars['String'];
  titleRu: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ProgramUncheckedUpdateInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  descriptionEn?: Maybe<StringFieldUpdateOperationsInput>;
  descriptionKz?: Maybe<StringFieldUpdateOperationsInput>;
  descriptionRu?: Maybe<StringFieldUpdateOperationsInput>;
  id?: Maybe<IntFieldUpdateOperationsInput>;
  schoolId?: Maybe<IntFieldUpdateOperationsInput>;
  titleEn?: Maybe<StringFieldUpdateOperationsInput>;
  titleKz?: Maybe<StringFieldUpdateOperationsInput>;
  titleRu?: Maybe<StringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type ProgramUncheckedUpdateManyInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  descriptionEn?: Maybe<StringFieldUpdateOperationsInput>;
  descriptionKz?: Maybe<StringFieldUpdateOperationsInput>;
  descriptionRu?: Maybe<StringFieldUpdateOperationsInput>;
  id?: Maybe<IntFieldUpdateOperationsInput>;
  schoolId?: Maybe<IntFieldUpdateOperationsInput>;
  titleEn?: Maybe<StringFieldUpdateOperationsInput>;
  titleKz?: Maybe<StringFieldUpdateOperationsInput>;
  titleRu?: Maybe<StringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type ProgramUncheckedUpdateManyWithoutProgramsInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  descriptionEn?: Maybe<StringFieldUpdateOperationsInput>;
  descriptionKz?: Maybe<StringFieldUpdateOperationsInput>;
  descriptionRu?: Maybe<StringFieldUpdateOperationsInput>;
  id?: Maybe<IntFieldUpdateOperationsInput>;
  titleEn?: Maybe<StringFieldUpdateOperationsInput>;
  titleKz?: Maybe<StringFieldUpdateOperationsInput>;
  titleRu?: Maybe<StringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type ProgramUncheckedUpdateManyWithoutSchoolInput = {
  connect?: Maybe<Array<Maybe<ProgramWhereUniqueInput>>>;
  connectOrCreate?: Maybe<Array<Maybe<ProgramCreateOrConnectWithoutSchoolInput>>>;
  create?: Maybe<Array<Maybe<ProgramCreateWithoutSchoolInput>>>;
  createMany?: Maybe<ProgramCreateManySchoolInputEnvelope>;
  delete?: Maybe<Array<Maybe<ProgramWhereUniqueInput>>>;
  deleteMany?: Maybe<Array<Maybe<ProgramScalarWhereInput>>>;
  disconnect?: Maybe<Array<Maybe<ProgramWhereUniqueInput>>>;
  set?: Maybe<Array<Maybe<ProgramWhereUniqueInput>>>;
  update?: Maybe<Array<Maybe<ProgramUpdateWithWhereUniqueWithoutSchoolInput>>>;
  updateMany?: Maybe<Array<Maybe<ProgramUpdateManyWithWhereWithoutSchoolInput>>>;
  upsert?: Maybe<Array<Maybe<ProgramUpsertWithWhereUniqueWithoutSchoolInput>>>;
};

export type ProgramUncheckedUpdateWithoutSchoolInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  descriptionEn?: Maybe<StringFieldUpdateOperationsInput>;
  descriptionKz?: Maybe<StringFieldUpdateOperationsInput>;
  descriptionRu?: Maybe<StringFieldUpdateOperationsInput>;
  id?: Maybe<IntFieldUpdateOperationsInput>;
  titleEn?: Maybe<StringFieldUpdateOperationsInput>;
  titleKz?: Maybe<StringFieldUpdateOperationsInput>;
  titleRu?: Maybe<StringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type ProgramUpdateInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  descriptionEn?: Maybe<StringFieldUpdateOperationsInput>;
  descriptionKz?: Maybe<StringFieldUpdateOperationsInput>;
  descriptionRu?: Maybe<StringFieldUpdateOperationsInput>;
  school?: Maybe<SchoolUpdateOneRequiredWithoutProgramsInput>;
  titleEn?: Maybe<StringFieldUpdateOperationsInput>;
  titleKz?: Maybe<StringFieldUpdateOperationsInput>;
  titleRu?: Maybe<StringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type ProgramUpdateManyMutationInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  descriptionEn?: Maybe<StringFieldUpdateOperationsInput>;
  descriptionKz?: Maybe<StringFieldUpdateOperationsInput>;
  descriptionRu?: Maybe<StringFieldUpdateOperationsInput>;
  titleEn?: Maybe<StringFieldUpdateOperationsInput>;
  titleKz?: Maybe<StringFieldUpdateOperationsInput>;
  titleRu?: Maybe<StringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type ProgramUpdateManyWithWhereWithoutSchoolInput = {
  data: ProgramUncheckedUpdateManyWithoutProgramsInput;
  where: ProgramScalarWhereInput;
};

export type ProgramUpdateManyWithoutSchoolInput = {
  connect?: Maybe<Array<Maybe<ProgramWhereUniqueInput>>>;
  connectOrCreate?: Maybe<Array<Maybe<ProgramCreateOrConnectWithoutSchoolInput>>>;
  create?: Maybe<Array<Maybe<ProgramCreateWithoutSchoolInput>>>;
  createMany?: Maybe<ProgramCreateManySchoolInputEnvelope>;
  delete?: Maybe<Array<Maybe<ProgramWhereUniqueInput>>>;
  deleteMany?: Maybe<Array<Maybe<ProgramScalarWhereInput>>>;
  disconnect?: Maybe<Array<Maybe<ProgramWhereUniqueInput>>>;
  set?: Maybe<Array<Maybe<ProgramWhereUniqueInput>>>;
  update?: Maybe<Array<Maybe<ProgramUpdateWithWhereUniqueWithoutSchoolInput>>>;
  updateMany?: Maybe<Array<Maybe<ProgramUpdateManyWithWhereWithoutSchoolInput>>>;
  upsert?: Maybe<Array<Maybe<ProgramUpsertWithWhereUniqueWithoutSchoolInput>>>;
};

export type ProgramUpdateWithWhereUniqueWithoutSchoolInput = {
  data: ProgramUncheckedUpdateWithoutSchoolInput;
  where: ProgramWhereUniqueInput;
};

export type ProgramUpdateWithoutSchoolInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  descriptionEn?: Maybe<StringFieldUpdateOperationsInput>;
  descriptionKz?: Maybe<StringFieldUpdateOperationsInput>;
  descriptionRu?: Maybe<StringFieldUpdateOperationsInput>;
  titleEn?: Maybe<StringFieldUpdateOperationsInput>;
  titleKz?: Maybe<StringFieldUpdateOperationsInput>;
  titleRu?: Maybe<StringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type ProgramUpsertWithWhereUniqueWithoutSchoolInput = {
  create: ProgramUncheckedCreateWithoutSchoolInput;
  update: ProgramUncheckedUpdateWithoutSchoolInput;
  where: ProgramWhereUniqueInput;
};

export type ProgramWhereInput = {
  AND?: Maybe<Array<Maybe<ProgramWhereInput>>>;
  NOT?: Maybe<Array<Maybe<ProgramWhereInput>>>;
  OR?: Maybe<Array<Maybe<ProgramWhereInput>>>;
  createdAt?: Maybe<DateTimeFilter>;
  descriptionEn?: Maybe<StringFilter>;
  descriptionKz?: Maybe<StringFilter>;
  descriptionRu?: Maybe<StringFilter>;
  id?: Maybe<IntFilter>;
  school?: Maybe<SchoolWhereInput>;
  schoolId?: Maybe<IntFilter>;
  titleEn?: Maybe<StringFilter>;
  titleKz?: Maybe<StringFilter>;
  titleRu?: Maybe<StringFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
};

export type ProgramWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>;
};

export type Query = {
  __typename?: 'Query';
  aggregateCity?: Maybe<AggregateCity>;
  aggregateFaq?: Maybe<AggregateFaq>;
  aggregateFeature?: Maybe<AggregateFeature>;
  aggregateImage?: Maybe<AggregateImage>;
  aggregateProgram?: Maybe<AggregateProgram>;
  aggregateSchool?: Maybe<AggregateSchool>;
  aggregateStudent?: Maybe<AggregateStudent>;
  aggregateSubject?: Maybe<AggregateSubject>;
  aggregateTeacher?: Maybe<AggregateTeacher>;
  aggregateUser?: Maybe<AggregateUser>;
  findFirstCity?: Maybe<City>;
  findFirstFaq?: Maybe<Faq>;
  findFirstFeature?: Maybe<Feature>;
  findFirstImage?: Maybe<Image>;
  findFirstProgram?: Maybe<Program>;
  findFirstSchool?: Maybe<School>;
  findFirstStudent?: Maybe<Student>;
  findFirstSubject?: Maybe<Subject>;
  findFirstTeacher?: Maybe<Teacher>;
  findFirstUser?: Maybe<User>;
  findManyCity: Array<City>;
  findManyCityCount: Scalars['Int'];
  findManyFaq: Array<Faq>;
  findManyFaqCount: Scalars['Int'];
  findManyFeature: Array<Feature>;
  findManyFeatureCount: Scalars['Int'];
  findManyImage: Array<Image>;
  findManyImageCount: Scalars['Int'];
  findManyProgram: Array<Program>;
  findManyProgramCount: Scalars['Int'];
  findManySchool: Array<School>;
  findManySchoolCount: Scalars['Int'];
  findManyStudent: Array<Student>;
  findManyStudentCount: Scalars['Int'];
  findManySubject: Array<Subject>;
  findManySubjectCount: Scalars['Int'];
  findManyTeacher: Array<Teacher>;
  findManyTeacherCount: Scalars['Int'];
  findManyUser: Array<User>;
  findManyUserCount: Scalars['Int'];
  findUniqueCity?: Maybe<City>;
  findUniqueFaq?: Maybe<Faq>;
  findUniqueFeature?: Maybe<Feature>;
  findUniqueImage?: Maybe<Image>;
  findUniqueProgram?: Maybe<Program>;
  findUniqueSchool?: Maybe<School>;
  findUniqueStudent?: Maybe<Student>;
  findUniqueSubject?: Maybe<Subject>;
  findUniqueTeacher?: Maybe<Teacher>;
  findUniqueUser?: Maybe<User>;
  getSchema: Schema;
  me?: Maybe<User>;
};


export type QueryAggregateCityArgs = {
  cursor?: Maybe<CityWhereUniqueInput>;
  orderBy?: Maybe<Array<Maybe<CityOrderByWithRelationInput>>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<CityWhereInput>;
};


export type QueryAggregateFaqArgs = {
  cursor?: Maybe<FaqWhereUniqueInput>;
  orderBy?: Maybe<Array<Maybe<FaqOrderByWithRelationInput>>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<FaqWhereInput>;
};


export type QueryAggregateFeatureArgs = {
  cursor?: Maybe<FeatureWhereUniqueInput>;
  orderBy?: Maybe<Array<Maybe<FeatureOrderByWithRelationInput>>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<FeatureWhereInput>;
};


export type QueryAggregateImageArgs = {
  cursor?: Maybe<ImageWhereUniqueInput>;
  orderBy?: Maybe<Array<Maybe<ImageOrderByWithRelationInput>>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<ImageWhereInput>;
};


export type QueryAggregateProgramArgs = {
  cursor?: Maybe<ProgramWhereUniqueInput>;
  orderBy?: Maybe<Array<Maybe<ProgramOrderByWithRelationInput>>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<ProgramWhereInput>;
};


export type QueryAggregateSchoolArgs = {
  cursor?: Maybe<SchoolWhereUniqueInput>;
  orderBy?: Maybe<Array<Maybe<SchoolOrderByWithRelationInput>>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<SchoolWhereInput>;
};


export type QueryAggregateStudentArgs = {
  cursor?: Maybe<StudentWhereUniqueInput>;
  orderBy?: Maybe<Array<Maybe<StudentOrderByWithRelationInput>>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<StudentWhereInput>;
};


export type QueryAggregateSubjectArgs = {
  cursor?: Maybe<SubjectWhereUniqueInput>;
  orderBy?: Maybe<Array<Maybe<SubjectOrderByWithRelationInput>>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<SubjectWhereInput>;
};


export type QueryAggregateTeacherArgs = {
  cursor?: Maybe<TeacherWhereUniqueInput>;
  orderBy?: Maybe<Array<Maybe<TeacherOrderByWithRelationInput>>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<TeacherWhereInput>;
};


export type QueryAggregateUserArgs = {
  cursor?: Maybe<UserWhereUniqueInput>;
  orderBy?: Maybe<Array<Maybe<UserOrderByWithRelationInput>>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<UserWhereInput>;
};


export type QueryFindFirstCityArgs = {
  cursor?: Maybe<CityWhereUniqueInput>;
  distinct?: Maybe<Array<Maybe<CityScalarFieldEnum>>>;
  orderBy?: Maybe<Array<Maybe<CityOrderByWithRelationInput>>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<CityWhereInput>;
};


export type QueryFindFirstFaqArgs = {
  cursor?: Maybe<FaqWhereUniqueInput>;
  distinct?: Maybe<Array<Maybe<FaqScalarFieldEnum>>>;
  orderBy?: Maybe<Array<Maybe<FaqOrderByWithRelationInput>>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<FaqWhereInput>;
};


export type QueryFindFirstFeatureArgs = {
  cursor?: Maybe<FeatureWhereUniqueInput>;
  distinct?: Maybe<Array<Maybe<FeatureScalarFieldEnum>>>;
  orderBy?: Maybe<Array<Maybe<FeatureOrderByWithRelationInput>>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<FeatureWhereInput>;
};


export type QueryFindFirstImageArgs = {
  cursor?: Maybe<ImageWhereUniqueInput>;
  distinct?: Maybe<Array<Maybe<ImageScalarFieldEnum>>>;
  orderBy?: Maybe<Array<Maybe<ImageOrderByWithRelationInput>>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<ImageWhereInput>;
};


export type QueryFindFirstProgramArgs = {
  cursor?: Maybe<ProgramWhereUniqueInput>;
  distinct?: Maybe<Array<Maybe<ProgramScalarFieldEnum>>>;
  orderBy?: Maybe<Array<Maybe<ProgramOrderByWithRelationInput>>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<ProgramWhereInput>;
};


export type QueryFindFirstSchoolArgs = {
  cursor?: Maybe<SchoolWhereUniqueInput>;
  distinct?: Maybe<Array<Maybe<SchoolScalarFieldEnum>>>;
  orderBy?: Maybe<Array<Maybe<SchoolOrderByWithRelationInput>>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<SchoolWhereInput>;
};


export type QueryFindFirstStudentArgs = {
  cursor?: Maybe<StudentWhereUniqueInput>;
  distinct?: Maybe<Array<Maybe<StudentScalarFieldEnum>>>;
  orderBy?: Maybe<Array<Maybe<StudentOrderByWithRelationInput>>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<StudentWhereInput>;
};


export type QueryFindFirstSubjectArgs = {
  cursor?: Maybe<SubjectWhereUniqueInput>;
  distinct?: Maybe<Array<Maybe<SubjectScalarFieldEnum>>>;
  orderBy?: Maybe<Array<Maybe<SubjectOrderByWithRelationInput>>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<SubjectWhereInput>;
};


export type QueryFindFirstTeacherArgs = {
  cursor?: Maybe<TeacherWhereUniqueInput>;
  distinct?: Maybe<Array<Maybe<TeacherScalarFieldEnum>>>;
  orderBy?: Maybe<Array<Maybe<TeacherOrderByWithRelationInput>>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<TeacherWhereInput>;
};


export type QueryFindFirstUserArgs = {
  cursor?: Maybe<UserWhereUniqueInput>;
  distinct?: Maybe<Array<Maybe<UserScalarFieldEnum>>>;
  orderBy?: Maybe<Array<Maybe<UserOrderByWithRelationInput>>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<UserWhereInput>;
};


export type QueryFindManyCityArgs = {
  cursor?: Maybe<CityWhereUniqueInput>;
  distinct?: Maybe<Array<Maybe<CityScalarFieldEnum>>>;
  orderBy?: Maybe<Array<Maybe<CityOrderByWithRelationInput>>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<CityWhereInput>;
};


export type QueryFindManyCityCountArgs = {
  cursor?: Maybe<CityWhereUniqueInput>;
  distinct?: Maybe<Array<Maybe<CityScalarFieldEnum>>>;
  orderBy?: Maybe<Array<Maybe<CityOrderByWithRelationInput>>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<CityWhereInput>;
};


export type QueryFindManyFaqArgs = {
  cursor?: Maybe<FaqWhereUniqueInput>;
  distinct?: Maybe<Array<Maybe<FaqScalarFieldEnum>>>;
  orderBy?: Maybe<Array<Maybe<FaqOrderByWithRelationInput>>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<FaqWhereInput>;
};


export type QueryFindManyFaqCountArgs = {
  cursor?: Maybe<FaqWhereUniqueInput>;
  distinct?: Maybe<Array<Maybe<FaqScalarFieldEnum>>>;
  orderBy?: Maybe<Array<Maybe<FaqOrderByWithRelationInput>>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<FaqWhereInput>;
};


export type QueryFindManyFeatureArgs = {
  cursor?: Maybe<FeatureWhereUniqueInput>;
  distinct?: Maybe<Array<Maybe<FeatureScalarFieldEnum>>>;
  orderBy?: Maybe<Array<Maybe<FeatureOrderByWithRelationInput>>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<FeatureWhereInput>;
};


export type QueryFindManyFeatureCountArgs = {
  cursor?: Maybe<FeatureWhereUniqueInput>;
  distinct?: Maybe<Array<Maybe<FeatureScalarFieldEnum>>>;
  orderBy?: Maybe<Array<Maybe<FeatureOrderByWithRelationInput>>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<FeatureWhereInput>;
};


export type QueryFindManyImageArgs = {
  cursor?: Maybe<ImageWhereUniqueInput>;
  distinct?: Maybe<Array<Maybe<ImageScalarFieldEnum>>>;
  orderBy?: Maybe<Array<Maybe<ImageOrderByWithRelationInput>>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<ImageWhereInput>;
};


export type QueryFindManyImageCountArgs = {
  cursor?: Maybe<ImageWhereUniqueInput>;
  distinct?: Maybe<Array<Maybe<ImageScalarFieldEnum>>>;
  orderBy?: Maybe<Array<Maybe<ImageOrderByWithRelationInput>>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<ImageWhereInput>;
};


export type QueryFindManyProgramArgs = {
  cursor?: Maybe<ProgramWhereUniqueInput>;
  distinct?: Maybe<Array<Maybe<ProgramScalarFieldEnum>>>;
  orderBy?: Maybe<Array<Maybe<ProgramOrderByWithRelationInput>>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<ProgramWhereInput>;
};


export type QueryFindManyProgramCountArgs = {
  cursor?: Maybe<ProgramWhereUniqueInput>;
  distinct?: Maybe<Array<Maybe<ProgramScalarFieldEnum>>>;
  orderBy?: Maybe<Array<Maybe<ProgramOrderByWithRelationInput>>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<ProgramWhereInput>;
};


export type QueryFindManySchoolArgs = {
  cursor?: Maybe<SchoolWhereUniqueInput>;
  distinct?: Maybe<Array<Maybe<SchoolScalarFieldEnum>>>;
  orderBy?: Maybe<Array<Maybe<SchoolOrderByWithRelationInput>>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<SchoolWhereInput>;
};


export type QueryFindManySchoolCountArgs = {
  cursor?: Maybe<SchoolWhereUniqueInput>;
  distinct?: Maybe<Array<Maybe<SchoolScalarFieldEnum>>>;
  orderBy?: Maybe<Array<Maybe<SchoolOrderByWithRelationInput>>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<SchoolWhereInput>;
};


export type QueryFindManyStudentArgs = {
  cursor?: Maybe<StudentWhereUniqueInput>;
  distinct?: Maybe<Array<Maybe<StudentScalarFieldEnum>>>;
  orderBy?: Maybe<Array<Maybe<StudentOrderByWithRelationInput>>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<StudentWhereInput>;
};


export type QueryFindManyStudentCountArgs = {
  cursor?: Maybe<StudentWhereUniqueInput>;
  distinct?: Maybe<Array<Maybe<StudentScalarFieldEnum>>>;
  orderBy?: Maybe<Array<Maybe<StudentOrderByWithRelationInput>>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<StudentWhereInput>;
};


export type QueryFindManySubjectArgs = {
  cursor?: Maybe<SubjectWhereUniqueInput>;
  distinct?: Maybe<Array<Maybe<SubjectScalarFieldEnum>>>;
  orderBy?: Maybe<Array<Maybe<SubjectOrderByWithRelationInput>>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<SubjectWhereInput>;
};


export type QueryFindManySubjectCountArgs = {
  cursor?: Maybe<SubjectWhereUniqueInput>;
  distinct?: Maybe<Array<Maybe<SubjectScalarFieldEnum>>>;
  orderBy?: Maybe<Array<Maybe<SubjectOrderByWithRelationInput>>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<SubjectWhereInput>;
};


export type QueryFindManyTeacherArgs = {
  cursor?: Maybe<TeacherWhereUniqueInput>;
  distinct?: Maybe<Array<Maybe<TeacherScalarFieldEnum>>>;
  orderBy?: Maybe<Array<Maybe<TeacherOrderByWithRelationInput>>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<TeacherWhereInput>;
};


export type QueryFindManyTeacherCountArgs = {
  cursor?: Maybe<TeacherWhereUniqueInput>;
  distinct?: Maybe<Array<Maybe<TeacherScalarFieldEnum>>>;
  orderBy?: Maybe<Array<Maybe<TeacherOrderByWithRelationInput>>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<TeacherWhereInput>;
};


export type QueryFindManyUserArgs = {
  cursor?: Maybe<UserWhereUniqueInput>;
  distinct?: Maybe<Array<Maybe<UserScalarFieldEnum>>>;
  orderBy?: Maybe<Array<Maybe<UserOrderByWithRelationInput>>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<UserWhereInput>;
};


export type QueryFindManyUserCountArgs = {
  cursor?: Maybe<UserWhereUniqueInput>;
  distinct?: Maybe<Array<Maybe<UserScalarFieldEnum>>>;
  orderBy?: Maybe<Array<Maybe<UserOrderByWithRelationInput>>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<UserWhereInput>;
};


export type QueryFindUniqueCityArgs = {
  where: CityWhereUniqueInput;
};


export type QueryFindUniqueFaqArgs = {
  where: FaqWhereUniqueInput;
};


export type QueryFindUniqueFeatureArgs = {
  where: FeatureWhereUniqueInput;
};


export type QueryFindUniqueImageArgs = {
  where: ImageWhereUniqueInput;
};


export type QueryFindUniqueProgramArgs = {
  where: ProgramWhereUniqueInput;
};


export type QueryFindUniqueSchoolArgs = {
  where: SchoolWhereUniqueInput;
};


export type QueryFindUniqueStudentArgs = {
  where: StudentWhereUniqueInput;
};


export type QueryFindUniqueSubjectArgs = {
  where: SubjectWhereUniqueInput;
};


export type QueryFindUniqueTeacherArgs = {
  where: TeacherWhereUniqueInput;
};


export type QueryFindUniqueUserArgs = {
  where: UserWhereUniqueInput;
};

export enum QueryMode {
  Default = 'default',
  Insensitive = 'insensitive'
}

export type Schema = {
  __typename?: 'Schema';
  enums: Array<Enum>;
  models: Array<Model>;
};

export type School = {
  __typename?: 'School';
  _count?: Maybe<SchoolCountOutputType>;
  city: City;
  cityId: Scalars['Int'];
  createdAt: Scalars['DateTime'];
  descriptionEn: Scalars['String'];
  descriptionKz: Scalars['String'];
  descriptionRu: Scalars['String'];
  id: Scalars['Int'];
  programs: Array<Program>;
  students: Array<Student>;
  titleEn: Scalars['String'];
  titleKz: Scalars['String'];
  titleRu: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};


export type SchoolProgramsArgs = {
  cursor?: Maybe<ProgramWhereUniqueInput>;
  distinct?: Maybe<ProgramScalarFieldEnum>;
  orderBy?: Maybe<ProgramOrderByWithRelationInput>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<ProgramWhereInput>;
};


export type SchoolStudentsArgs = {
  cursor?: Maybe<StudentWhereUniqueInput>;
  distinct?: Maybe<StudentScalarFieldEnum>;
  orderBy?: Maybe<StudentOrderByWithRelationInput>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<StudentWhereInput>;
};

export type SchoolAvgAggregateOutputType = {
  __typename?: 'SchoolAvgAggregateOutputType';
  cityId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

export type SchoolAvgOrderByAggregateInput = {
  cityId?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
};

export type SchoolCountAggregateOutputType = {
  __typename?: 'SchoolCountAggregateOutputType';
  _all: Scalars['Int'];
  cityId: Scalars['Int'];
  createdAt: Scalars['Int'];
  descriptionEn: Scalars['Int'];
  descriptionKz: Scalars['Int'];
  descriptionRu: Scalars['Int'];
  id: Scalars['Int'];
  titleEn: Scalars['Int'];
  titleKz: Scalars['Int'];
  titleRu: Scalars['Int'];
  updatedAt: Scalars['Int'];
};

export type SchoolCountOrderByAggregateInput = {
  cityId?: Maybe<SortOrder>;
  createdAt?: Maybe<SortOrder>;
  descriptionEn?: Maybe<SortOrder>;
  descriptionKz?: Maybe<SortOrder>;
  descriptionRu?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  titleEn?: Maybe<SortOrder>;
  titleKz?: Maybe<SortOrder>;
  titleRu?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
};

export type SchoolCountOutputType = {
  __typename?: 'SchoolCountOutputType';
  programs: Scalars['Int'];
  students: Scalars['Int'];
};

export type SchoolCreateInput = {
  city: CityCreateNestedOneWithoutSchoolsInput;
  createdAt?: Maybe<Scalars['DateTime']>;
  descriptionEn: Scalars['String'];
  descriptionKz: Scalars['String'];
  descriptionRu: Scalars['String'];
  programs?: Maybe<ProgramCreateNestedManyWithoutSchoolInput>;
  students?: Maybe<StudentCreateNestedManyWithoutSchoolInput>;
  titleEn: Scalars['String'];
  titleKz: Scalars['String'];
  titleRu: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type SchoolCreateManyCityInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  descriptionEn: Scalars['String'];
  descriptionKz: Scalars['String'];
  descriptionRu: Scalars['String'];
  id?: Maybe<Scalars['Int']>;
  titleEn: Scalars['String'];
  titleKz: Scalars['String'];
  titleRu: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type SchoolCreateManyCityInputEnvelope = {
  data: SchoolCreateManyCityInput;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type SchoolCreateManyInput = {
  cityId: Scalars['Int'];
  createdAt?: Maybe<Scalars['DateTime']>;
  descriptionEn: Scalars['String'];
  descriptionKz: Scalars['String'];
  descriptionRu: Scalars['String'];
  id?: Maybe<Scalars['Int']>;
  titleEn: Scalars['String'];
  titleKz: Scalars['String'];
  titleRu: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type SchoolCreateNestedManyWithoutCityInput = {
  connect?: Maybe<Array<Maybe<SchoolWhereUniqueInput>>>;
  connectOrCreate?: Maybe<Array<Maybe<SchoolCreateOrConnectWithoutCityInput>>>;
  create?: Maybe<Array<Maybe<SchoolCreateWithoutCityInput>>>;
  createMany?: Maybe<SchoolCreateManyCityInputEnvelope>;
};

export type SchoolCreateNestedOneWithoutProgramsInput = {
  connect?: Maybe<SchoolWhereUniqueInput>;
  connectOrCreate?: Maybe<SchoolCreateOrConnectWithoutProgramsInput>;
  create?: Maybe<SchoolUncheckedCreateWithoutProgramsInput>;
};

export type SchoolCreateNestedOneWithoutStudentsInput = {
  connect?: Maybe<SchoolWhereUniqueInput>;
  connectOrCreate?: Maybe<SchoolCreateOrConnectWithoutStudentsInput>;
  create?: Maybe<SchoolUncheckedCreateWithoutStudentsInput>;
};

export type SchoolCreateOrConnectWithoutCityInput = {
  create: SchoolUncheckedCreateWithoutCityInput;
  where: SchoolWhereUniqueInput;
};

export type SchoolCreateOrConnectWithoutProgramsInput = {
  create: SchoolUncheckedCreateWithoutProgramsInput;
  where: SchoolWhereUniqueInput;
};

export type SchoolCreateOrConnectWithoutStudentsInput = {
  create: SchoolUncheckedCreateWithoutStudentsInput;
  where: SchoolWhereUniqueInput;
};

export type SchoolCreateWithoutCityInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  descriptionEn: Scalars['String'];
  descriptionKz: Scalars['String'];
  descriptionRu: Scalars['String'];
  programs?: Maybe<ProgramCreateNestedManyWithoutSchoolInput>;
  students?: Maybe<StudentCreateNestedManyWithoutSchoolInput>;
  titleEn: Scalars['String'];
  titleKz: Scalars['String'];
  titleRu: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type SchoolCreateWithoutProgramsInput = {
  city: CityCreateNestedOneWithoutSchoolsInput;
  createdAt?: Maybe<Scalars['DateTime']>;
  descriptionEn: Scalars['String'];
  descriptionKz: Scalars['String'];
  descriptionRu: Scalars['String'];
  students?: Maybe<StudentCreateNestedManyWithoutSchoolInput>;
  titleEn: Scalars['String'];
  titleKz: Scalars['String'];
  titleRu: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type SchoolCreateWithoutStudentsInput = {
  city: CityCreateNestedOneWithoutSchoolsInput;
  createdAt?: Maybe<Scalars['DateTime']>;
  descriptionEn: Scalars['String'];
  descriptionKz: Scalars['String'];
  descriptionRu: Scalars['String'];
  programs?: Maybe<ProgramCreateNestedManyWithoutSchoolInput>;
  titleEn: Scalars['String'];
  titleKz: Scalars['String'];
  titleRu: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type SchoolListRelationFilter = {
  every?: Maybe<SchoolWhereInput>;
  none?: Maybe<SchoolWhereInput>;
  some?: Maybe<SchoolWhereInput>;
};

export type SchoolMaxAggregateOutputType = {
  __typename?: 'SchoolMaxAggregateOutputType';
  cityId?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  descriptionEn?: Maybe<Scalars['String']>;
  descriptionKz?: Maybe<Scalars['String']>;
  descriptionRu?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  titleEn?: Maybe<Scalars['String']>;
  titleKz?: Maybe<Scalars['String']>;
  titleRu?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type SchoolMaxOrderByAggregateInput = {
  cityId?: Maybe<SortOrder>;
  createdAt?: Maybe<SortOrder>;
  descriptionEn?: Maybe<SortOrder>;
  descriptionKz?: Maybe<SortOrder>;
  descriptionRu?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  titleEn?: Maybe<SortOrder>;
  titleKz?: Maybe<SortOrder>;
  titleRu?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
};

export type SchoolMinAggregateOutputType = {
  __typename?: 'SchoolMinAggregateOutputType';
  cityId?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  descriptionEn?: Maybe<Scalars['String']>;
  descriptionKz?: Maybe<Scalars['String']>;
  descriptionRu?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  titleEn?: Maybe<Scalars['String']>;
  titleKz?: Maybe<Scalars['String']>;
  titleRu?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type SchoolMinOrderByAggregateInput = {
  cityId?: Maybe<SortOrder>;
  createdAt?: Maybe<SortOrder>;
  descriptionEn?: Maybe<SortOrder>;
  descriptionKz?: Maybe<SortOrder>;
  descriptionRu?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  titleEn?: Maybe<SortOrder>;
  titleKz?: Maybe<SortOrder>;
  titleRu?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
};

export type SchoolOrderByRelationAggregateInput = {
  _count?: Maybe<SortOrder>;
};

export type SchoolOrderByWithAggregationInput = {
  _avg?: Maybe<SchoolAvgOrderByAggregateInput>;
  _count?: Maybe<SchoolCountOrderByAggregateInput>;
  _max?: Maybe<SchoolMaxOrderByAggregateInput>;
  _min?: Maybe<SchoolMinOrderByAggregateInput>;
  _sum?: Maybe<SchoolSumOrderByAggregateInput>;
  cityId?: Maybe<SortOrder>;
  createdAt?: Maybe<SortOrder>;
  descriptionEn?: Maybe<SortOrder>;
  descriptionKz?: Maybe<SortOrder>;
  descriptionRu?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  titleEn?: Maybe<SortOrder>;
  titleKz?: Maybe<SortOrder>;
  titleRu?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
};

export type SchoolOrderByWithRelationInput = {
  city?: Maybe<CityOrderByWithRelationInput>;
  cityId?: Maybe<SortOrder>;
  createdAt?: Maybe<SortOrder>;
  descriptionEn?: Maybe<SortOrder>;
  descriptionKz?: Maybe<SortOrder>;
  descriptionRu?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  programs?: Maybe<ProgramOrderByRelationAggregateInput>;
  students?: Maybe<StudentOrderByRelationAggregateInput>;
  titleEn?: Maybe<SortOrder>;
  titleKz?: Maybe<SortOrder>;
  titleRu?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
};

export type SchoolRelationFilter = {
  is?: Maybe<SchoolWhereInput>;
  isNot?: Maybe<SchoolWhereInput>;
};

export enum SchoolScalarFieldEnum {
  CityId = 'cityId',
  CreatedAt = 'createdAt',
  DescriptionEn = 'descriptionEn',
  DescriptionKz = 'descriptionKz',
  DescriptionRu = 'descriptionRu',
  Id = 'id',
  TitleEn = 'titleEn',
  TitleKz = 'titleKz',
  TitleRu = 'titleRu',
  UpdatedAt = 'updatedAt'
}

export type SchoolScalarWhereInput = {
  AND?: Maybe<Array<Maybe<SchoolScalarWhereInput>>>;
  NOT?: Maybe<Array<Maybe<SchoolScalarWhereInput>>>;
  OR?: Maybe<Array<Maybe<SchoolScalarWhereInput>>>;
  cityId?: Maybe<IntFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  descriptionEn?: Maybe<StringFilter>;
  descriptionKz?: Maybe<StringFilter>;
  descriptionRu?: Maybe<StringFilter>;
  id?: Maybe<IntFilter>;
  titleEn?: Maybe<StringFilter>;
  titleKz?: Maybe<StringFilter>;
  titleRu?: Maybe<StringFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
};

export type SchoolScalarWhereWithAggregatesInput = {
  AND?: Maybe<Array<Maybe<SchoolScalarWhereWithAggregatesInput>>>;
  NOT?: Maybe<Array<Maybe<SchoolScalarWhereWithAggregatesInput>>>;
  OR?: Maybe<Array<Maybe<SchoolScalarWhereWithAggregatesInput>>>;
  cityId?: Maybe<IntWithAggregatesFilter>;
  createdAt?: Maybe<DateTimeWithAggregatesFilter>;
  descriptionEn?: Maybe<StringWithAggregatesFilter>;
  descriptionKz?: Maybe<StringWithAggregatesFilter>;
  descriptionRu?: Maybe<StringWithAggregatesFilter>;
  id?: Maybe<IntWithAggregatesFilter>;
  titleEn?: Maybe<StringWithAggregatesFilter>;
  titleKz?: Maybe<StringWithAggregatesFilter>;
  titleRu?: Maybe<StringWithAggregatesFilter>;
  updatedAt?: Maybe<DateTimeWithAggregatesFilter>;
};

export type SchoolSumAggregateOutputType = {
  __typename?: 'SchoolSumAggregateOutputType';
  cityId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
};

export type SchoolSumOrderByAggregateInput = {
  cityId?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
};

export type SchoolUncheckedCreateInput = {
  cityId: Scalars['Int'];
  createdAt?: Maybe<Scalars['DateTime']>;
  descriptionEn: Scalars['String'];
  descriptionKz: Scalars['String'];
  descriptionRu: Scalars['String'];
  id?: Maybe<Scalars['Int']>;
  programs?: Maybe<ProgramUncheckedCreateNestedManyWithoutSchoolInput>;
  students?: Maybe<StudentUncheckedCreateNestedManyWithoutSchoolInput>;
  titleEn: Scalars['String'];
  titleKz: Scalars['String'];
  titleRu: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type SchoolUncheckedCreateNestedManyWithoutCityInput = {
  connect?: Maybe<Array<Maybe<SchoolWhereUniqueInput>>>;
  connectOrCreate?: Maybe<Array<Maybe<SchoolCreateOrConnectWithoutCityInput>>>;
  create?: Maybe<Array<Maybe<SchoolCreateWithoutCityInput>>>;
  createMany?: Maybe<SchoolCreateManyCityInputEnvelope>;
};

export type SchoolUncheckedCreateWithoutCityInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  descriptionEn: Scalars['String'];
  descriptionKz: Scalars['String'];
  descriptionRu: Scalars['String'];
  id?: Maybe<Scalars['Int']>;
  programs?: Maybe<ProgramUncheckedCreateNestedManyWithoutSchoolInput>;
  students?: Maybe<StudentUncheckedCreateNestedManyWithoutSchoolInput>;
  titleEn: Scalars['String'];
  titleKz: Scalars['String'];
  titleRu: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type SchoolUncheckedCreateWithoutProgramsInput = {
  cityId: Scalars['Int'];
  createdAt?: Maybe<Scalars['DateTime']>;
  descriptionEn: Scalars['String'];
  descriptionKz: Scalars['String'];
  descriptionRu: Scalars['String'];
  id?: Maybe<Scalars['Int']>;
  students?: Maybe<StudentUncheckedCreateNestedManyWithoutSchoolInput>;
  titleEn: Scalars['String'];
  titleKz: Scalars['String'];
  titleRu: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type SchoolUncheckedCreateWithoutStudentsInput = {
  cityId: Scalars['Int'];
  createdAt?: Maybe<Scalars['DateTime']>;
  descriptionEn: Scalars['String'];
  descriptionKz: Scalars['String'];
  descriptionRu: Scalars['String'];
  id?: Maybe<Scalars['Int']>;
  programs?: Maybe<ProgramUncheckedCreateNestedManyWithoutSchoolInput>;
  titleEn: Scalars['String'];
  titleKz: Scalars['String'];
  titleRu: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type SchoolUncheckedUpdateInput = {
  cityId?: Maybe<IntFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  descriptionEn?: Maybe<StringFieldUpdateOperationsInput>;
  descriptionKz?: Maybe<StringFieldUpdateOperationsInput>;
  descriptionRu?: Maybe<StringFieldUpdateOperationsInput>;
  id?: Maybe<IntFieldUpdateOperationsInput>;
  programs?: Maybe<ProgramUncheckedUpdateManyWithoutSchoolInput>;
  students?: Maybe<StudentUncheckedUpdateManyWithoutSchoolInput>;
  titleEn?: Maybe<StringFieldUpdateOperationsInput>;
  titleKz?: Maybe<StringFieldUpdateOperationsInput>;
  titleRu?: Maybe<StringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type SchoolUncheckedUpdateManyInput = {
  cityId?: Maybe<IntFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  descriptionEn?: Maybe<StringFieldUpdateOperationsInput>;
  descriptionKz?: Maybe<StringFieldUpdateOperationsInput>;
  descriptionRu?: Maybe<StringFieldUpdateOperationsInput>;
  id?: Maybe<IntFieldUpdateOperationsInput>;
  titleEn?: Maybe<StringFieldUpdateOperationsInput>;
  titleKz?: Maybe<StringFieldUpdateOperationsInput>;
  titleRu?: Maybe<StringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type SchoolUncheckedUpdateManyWithoutCityInput = {
  connect?: Maybe<Array<Maybe<SchoolWhereUniqueInput>>>;
  connectOrCreate?: Maybe<Array<Maybe<SchoolCreateOrConnectWithoutCityInput>>>;
  create?: Maybe<Array<Maybe<SchoolCreateWithoutCityInput>>>;
  createMany?: Maybe<SchoolCreateManyCityInputEnvelope>;
  delete?: Maybe<Array<Maybe<SchoolWhereUniqueInput>>>;
  deleteMany?: Maybe<Array<Maybe<SchoolScalarWhereInput>>>;
  disconnect?: Maybe<Array<Maybe<SchoolWhereUniqueInput>>>;
  set?: Maybe<Array<Maybe<SchoolWhereUniqueInput>>>;
  update?: Maybe<Array<Maybe<SchoolUpdateWithWhereUniqueWithoutCityInput>>>;
  updateMany?: Maybe<Array<Maybe<SchoolUpdateManyWithWhereWithoutCityInput>>>;
  upsert?: Maybe<Array<Maybe<SchoolUpsertWithWhereUniqueWithoutCityInput>>>;
};

export type SchoolUncheckedUpdateManyWithoutSchoolsInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  descriptionEn?: Maybe<StringFieldUpdateOperationsInput>;
  descriptionKz?: Maybe<StringFieldUpdateOperationsInput>;
  descriptionRu?: Maybe<StringFieldUpdateOperationsInput>;
  id?: Maybe<IntFieldUpdateOperationsInput>;
  titleEn?: Maybe<StringFieldUpdateOperationsInput>;
  titleKz?: Maybe<StringFieldUpdateOperationsInput>;
  titleRu?: Maybe<StringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type SchoolUncheckedUpdateWithoutCityInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  descriptionEn?: Maybe<StringFieldUpdateOperationsInput>;
  descriptionKz?: Maybe<StringFieldUpdateOperationsInput>;
  descriptionRu?: Maybe<StringFieldUpdateOperationsInput>;
  id?: Maybe<IntFieldUpdateOperationsInput>;
  programs?: Maybe<ProgramUncheckedUpdateManyWithoutSchoolInput>;
  students?: Maybe<StudentUncheckedUpdateManyWithoutSchoolInput>;
  titleEn?: Maybe<StringFieldUpdateOperationsInput>;
  titleKz?: Maybe<StringFieldUpdateOperationsInput>;
  titleRu?: Maybe<StringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type SchoolUncheckedUpdateWithoutProgramsInput = {
  cityId?: Maybe<IntFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  descriptionEn?: Maybe<StringFieldUpdateOperationsInput>;
  descriptionKz?: Maybe<StringFieldUpdateOperationsInput>;
  descriptionRu?: Maybe<StringFieldUpdateOperationsInput>;
  id?: Maybe<IntFieldUpdateOperationsInput>;
  students?: Maybe<StudentUncheckedUpdateManyWithoutSchoolInput>;
  titleEn?: Maybe<StringFieldUpdateOperationsInput>;
  titleKz?: Maybe<StringFieldUpdateOperationsInput>;
  titleRu?: Maybe<StringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type SchoolUncheckedUpdateWithoutStudentsInput = {
  cityId?: Maybe<IntFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  descriptionEn?: Maybe<StringFieldUpdateOperationsInput>;
  descriptionKz?: Maybe<StringFieldUpdateOperationsInput>;
  descriptionRu?: Maybe<StringFieldUpdateOperationsInput>;
  id?: Maybe<IntFieldUpdateOperationsInput>;
  programs?: Maybe<ProgramUncheckedUpdateManyWithoutSchoolInput>;
  titleEn?: Maybe<StringFieldUpdateOperationsInput>;
  titleKz?: Maybe<StringFieldUpdateOperationsInput>;
  titleRu?: Maybe<StringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type SchoolUpdateInput = {
  city?: Maybe<CityUpdateOneRequiredWithoutSchoolsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  descriptionEn?: Maybe<StringFieldUpdateOperationsInput>;
  descriptionKz?: Maybe<StringFieldUpdateOperationsInput>;
  descriptionRu?: Maybe<StringFieldUpdateOperationsInput>;
  programs?: Maybe<ProgramUpdateManyWithoutSchoolInput>;
  students?: Maybe<StudentUpdateManyWithoutSchoolInput>;
  titleEn?: Maybe<StringFieldUpdateOperationsInput>;
  titleKz?: Maybe<StringFieldUpdateOperationsInput>;
  titleRu?: Maybe<StringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type SchoolUpdateManyMutationInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  descriptionEn?: Maybe<StringFieldUpdateOperationsInput>;
  descriptionKz?: Maybe<StringFieldUpdateOperationsInput>;
  descriptionRu?: Maybe<StringFieldUpdateOperationsInput>;
  titleEn?: Maybe<StringFieldUpdateOperationsInput>;
  titleKz?: Maybe<StringFieldUpdateOperationsInput>;
  titleRu?: Maybe<StringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type SchoolUpdateManyWithWhereWithoutCityInput = {
  data: SchoolUncheckedUpdateManyWithoutSchoolsInput;
  where: SchoolScalarWhereInput;
};

export type SchoolUpdateManyWithoutCityInput = {
  connect?: Maybe<Array<Maybe<SchoolWhereUniqueInput>>>;
  connectOrCreate?: Maybe<Array<Maybe<SchoolCreateOrConnectWithoutCityInput>>>;
  create?: Maybe<Array<Maybe<SchoolCreateWithoutCityInput>>>;
  createMany?: Maybe<SchoolCreateManyCityInputEnvelope>;
  delete?: Maybe<Array<Maybe<SchoolWhereUniqueInput>>>;
  deleteMany?: Maybe<Array<Maybe<SchoolScalarWhereInput>>>;
  disconnect?: Maybe<Array<Maybe<SchoolWhereUniqueInput>>>;
  set?: Maybe<Array<Maybe<SchoolWhereUniqueInput>>>;
  update?: Maybe<Array<Maybe<SchoolUpdateWithWhereUniqueWithoutCityInput>>>;
  updateMany?: Maybe<Array<Maybe<SchoolUpdateManyWithWhereWithoutCityInput>>>;
  upsert?: Maybe<Array<Maybe<SchoolUpsertWithWhereUniqueWithoutCityInput>>>;
};

export type SchoolUpdateOneRequiredWithoutProgramsInput = {
  connect?: Maybe<SchoolWhereUniqueInput>;
  connectOrCreate?: Maybe<SchoolCreateOrConnectWithoutProgramsInput>;
  create?: Maybe<SchoolUncheckedCreateWithoutProgramsInput>;
  update?: Maybe<SchoolUncheckedUpdateWithoutProgramsInput>;
  upsert?: Maybe<SchoolUpsertWithoutProgramsInput>;
};

export type SchoolUpdateOneRequiredWithoutStudentsInput = {
  connect?: Maybe<SchoolWhereUniqueInput>;
  connectOrCreate?: Maybe<SchoolCreateOrConnectWithoutStudentsInput>;
  create?: Maybe<SchoolUncheckedCreateWithoutStudentsInput>;
  update?: Maybe<SchoolUncheckedUpdateWithoutStudentsInput>;
  upsert?: Maybe<SchoolUpsertWithoutStudentsInput>;
};

export type SchoolUpdateWithWhereUniqueWithoutCityInput = {
  data: SchoolUncheckedUpdateWithoutCityInput;
  where: SchoolWhereUniqueInput;
};

export type SchoolUpdateWithoutCityInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  descriptionEn?: Maybe<StringFieldUpdateOperationsInput>;
  descriptionKz?: Maybe<StringFieldUpdateOperationsInput>;
  descriptionRu?: Maybe<StringFieldUpdateOperationsInput>;
  programs?: Maybe<ProgramUpdateManyWithoutSchoolInput>;
  students?: Maybe<StudentUpdateManyWithoutSchoolInput>;
  titleEn?: Maybe<StringFieldUpdateOperationsInput>;
  titleKz?: Maybe<StringFieldUpdateOperationsInput>;
  titleRu?: Maybe<StringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type SchoolUpdateWithoutProgramsInput = {
  city?: Maybe<CityUpdateOneRequiredWithoutSchoolsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  descriptionEn?: Maybe<StringFieldUpdateOperationsInput>;
  descriptionKz?: Maybe<StringFieldUpdateOperationsInput>;
  descriptionRu?: Maybe<StringFieldUpdateOperationsInput>;
  students?: Maybe<StudentUpdateManyWithoutSchoolInput>;
  titleEn?: Maybe<StringFieldUpdateOperationsInput>;
  titleKz?: Maybe<StringFieldUpdateOperationsInput>;
  titleRu?: Maybe<StringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type SchoolUpdateWithoutStudentsInput = {
  city?: Maybe<CityUpdateOneRequiredWithoutSchoolsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  descriptionEn?: Maybe<StringFieldUpdateOperationsInput>;
  descriptionKz?: Maybe<StringFieldUpdateOperationsInput>;
  descriptionRu?: Maybe<StringFieldUpdateOperationsInput>;
  programs?: Maybe<ProgramUpdateManyWithoutSchoolInput>;
  titleEn?: Maybe<StringFieldUpdateOperationsInput>;
  titleKz?: Maybe<StringFieldUpdateOperationsInput>;
  titleRu?: Maybe<StringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type SchoolUpsertWithWhereUniqueWithoutCityInput = {
  create: SchoolUncheckedCreateWithoutCityInput;
  update: SchoolUncheckedUpdateWithoutCityInput;
  where: SchoolWhereUniqueInput;
};

export type SchoolUpsertWithoutProgramsInput = {
  create: SchoolUncheckedCreateWithoutProgramsInput;
  update: SchoolUncheckedUpdateWithoutProgramsInput;
};

export type SchoolUpsertWithoutStudentsInput = {
  create: SchoolUncheckedCreateWithoutStudentsInput;
  update: SchoolUncheckedUpdateWithoutStudentsInput;
};

export type SchoolWhereInput = {
  AND?: Maybe<Array<Maybe<SchoolWhereInput>>>;
  NOT?: Maybe<Array<Maybe<SchoolWhereInput>>>;
  OR?: Maybe<Array<Maybe<SchoolWhereInput>>>;
  city?: Maybe<CityWhereInput>;
  cityId?: Maybe<IntFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  descriptionEn?: Maybe<StringFilter>;
  descriptionKz?: Maybe<StringFilter>;
  descriptionRu?: Maybe<StringFilter>;
  id?: Maybe<IntFilter>;
  programs?: Maybe<ProgramListRelationFilter>;
  students?: Maybe<StudentListRelationFilter>;
  titleEn?: Maybe<StringFilter>;
  titleKz?: Maybe<StringFilter>;
  titleRu?: Maybe<StringFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
};

export type SchoolWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>;
};

export enum SortOrder {
  Asc = 'asc',
  Desc = 'desc'
}

export type StringFieldUpdateOperationsInput = {
  set?: Maybe<Scalars['String']>;
};

export type StringFilter = {
  contains?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  equals?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  mode?: Maybe<QueryMode>;
  not?: Maybe<NestedStringFilter>;
  notIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  startsWith?: Maybe<Scalars['String']>;
};

export type StringNullableFilter = {
  contains?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  equals?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  mode?: Maybe<QueryMode>;
  not?: Maybe<NestedStringNullableFilter>;
  notIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  startsWith?: Maybe<Scalars['String']>;
};

export type StringNullableWithAggregatesFilter = {
  _count?: Maybe<NestedIntNullableFilter>;
  _max?: Maybe<NestedStringNullableFilter>;
  _min?: Maybe<NestedStringNullableFilter>;
  contains?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  equals?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  mode?: Maybe<QueryMode>;
  not?: Maybe<NestedStringNullableWithAggregatesFilter>;
  notIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  startsWith?: Maybe<Scalars['String']>;
};

export type StringWithAggregatesFilter = {
  _count?: Maybe<NestedIntFilter>;
  _max?: Maybe<NestedStringFilter>;
  _min?: Maybe<NestedStringFilter>;
  contains?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  equals?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  mode?: Maybe<QueryMode>;
  not?: Maybe<NestedStringWithAggregatesFilter>;
  notIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  startsWith?: Maybe<Scalars['String']>;
};

export type Student = {
  __typename?: 'Student';
  _count?: Maybe<StudentCountOutputType>;
  createdAt: Scalars['DateTime'];
  dateOfFinish: Scalars['DateTime'];
  firstName: Scalars['String'];
  id: Scalars['Int'];
  images: Array<Image>;
  lastName: Scalars['String'];
  school: School;
  schoolId: Scalars['Int'];
  updatedAt: Scalars['DateTime'];
};


export type StudentImagesArgs = {
  cursor?: Maybe<ImageWhereUniqueInput>;
  distinct?: Maybe<ImageScalarFieldEnum>;
  orderBy?: Maybe<ImageOrderByWithRelationInput>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<ImageWhereInput>;
};

export type StudentAvgAggregateOutputType = {
  __typename?: 'StudentAvgAggregateOutputType';
  id?: Maybe<Scalars['Float']>;
  schoolId?: Maybe<Scalars['Float']>;
};

export type StudentAvgOrderByAggregateInput = {
  id?: Maybe<SortOrder>;
  schoolId?: Maybe<SortOrder>;
};

export type StudentCountAggregateOutputType = {
  __typename?: 'StudentCountAggregateOutputType';
  _all: Scalars['Int'];
  createdAt: Scalars['Int'];
  dateOfFinish: Scalars['Int'];
  firstName: Scalars['Int'];
  id: Scalars['Int'];
  lastName: Scalars['Int'];
  schoolId: Scalars['Int'];
  updatedAt: Scalars['Int'];
};

export type StudentCountOrderByAggregateInput = {
  createdAt?: Maybe<SortOrder>;
  dateOfFinish?: Maybe<SortOrder>;
  firstName?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  lastName?: Maybe<SortOrder>;
  schoolId?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
};

export type StudentCountOutputType = {
  __typename?: 'StudentCountOutputType';
  images: Scalars['Int'];
};

export type StudentCreateInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  dateOfFinish: Scalars['DateTime'];
  firstName: Scalars['String'];
  images?: Maybe<ImageCreateNestedManyWithoutStudentInput>;
  lastName: Scalars['String'];
  school: SchoolCreateNestedOneWithoutStudentsInput;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type StudentCreateManyInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  dateOfFinish: Scalars['DateTime'];
  firstName: Scalars['String'];
  id?: Maybe<Scalars['Int']>;
  lastName: Scalars['String'];
  schoolId: Scalars['Int'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type StudentCreateManySchoolInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  dateOfFinish: Scalars['DateTime'];
  firstName: Scalars['String'];
  id?: Maybe<Scalars['Int']>;
  lastName: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type StudentCreateManySchoolInputEnvelope = {
  data: StudentCreateManySchoolInput;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type StudentCreateNestedManyWithoutSchoolInput = {
  connect?: Maybe<Array<Maybe<StudentWhereUniqueInput>>>;
  connectOrCreate?: Maybe<Array<Maybe<StudentCreateOrConnectWithoutSchoolInput>>>;
  create?: Maybe<Array<Maybe<StudentCreateWithoutSchoolInput>>>;
  createMany?: Maybe<StudentCreateManySchoolInputEnvelope>;
};

export type StudentCreateNestedOneWithoutImagesInput = {
  connect?: Maybe<StudentWhereUniqueInput>;
  connectOrCreate?: Maybe<StudentCreateOrConnectWithoutImagesInput>;
  create?: Maybe<StudentUncheckedCreateWithoutImagesInput>;
};

export type StudentCreateOrConnectWithoutImagesInput = {
  create: StudentUncheckedCreateWithoutImagesInput;
  where: StudentWhereUniqueInput;
};

export type StudentCreateOrConnectWithoutSchoolInput = {
  create: StudentUncheckedCreateWithoutSchoolInput;
  where: StudentWhereUniqueInput;
};

export type StudentCreateWithoutImagesInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  dateOfFinish: Scalars['DateTime'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  school: SchoolCreateNestedOneWithoutStudentsInput;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type StudentCreateWithoutSchoolInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  dateOfFinish: Scalars['DateTime'];
  firstName: Scalars['String'];
  images?: Maybe<ImageCreateNestedManyWithoutStudentInput>;
  lastName: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type StudentListRelationFilter = {
  every?: Maybe<StudentWhereInput>;
  none?: Maybe<StudentWhereInput>;
  some?: Maybe<StudentWhereInput>;
};

export type StudentMaxAggregateOutputType = {
  __typename?: 'StudentMaxAggregateOutputType';
  createdAt?: Maybe<Scalars['DateTime']>;
  dateOfFinish?: Maybe<Scalars['DateTime']>;
  firstName?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  lastName?: Maybe<Scalars['String']>;
  schoolId?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type StudentMaxOrderByAggregateInput = {
  createdAt?: Maybe<SortOrder>;
  dateOfFinish?: Maybe<SortOrder>;
  firstName?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  lastName?: Maybe<SortOrder>;
  schoolId?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
};

export type StudentMinAggregateOutputType = {
  __typename?: 'StudentMinAggregateOutputType';
  createdAt?: Maybe<Scalars['DateTime']>;
  dateOfFinish?: Maybe<Scalars['DateTime']>;
  firstName?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  lastName?: Maybe<Scalars['String']>;
  schoolId?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type StudentMinOrderByAggregateInput = {
  createdAt?: Maybe<SortOrder>;
  dateOfFinish?: Maybe<SortOrder>;
  firstName?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  lastName?: Maybe<SortOrder>;
  schoolId?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
};

export type StudentOrderByRelationAggregateInput = {
  _count?: Maybe<SortOrder>;
};

export type StudentOrderByWithAggregationInput = {
  _avg?: Maybe<StudentAvgOrderByAggregateInput>;
  _count?: Maybe<StudentCountOrderByAggregateInput>;
  _max?: Maybe<StudentMaxOrderByAggregateInput>;
  _min?: Maybe<StudentMinOrderByAggregateInput>;
  _sum?: Maybe<StudentSumOrderByAggregateInput>;
  createdAt?: Maybe<SortOrder>;
  dateOfFinish?: Maybe<SortOrder>;
  firstName?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  lastName?: Maybe<SortOrder>;
  schoolId?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
};

export type StudentOrderByWithRelationInput = {
  createdAt?: Maybe<SortOrder>;
  dateOfFinish?: Maybe<SortOrder>;
  firstName?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  images?: Maybe<ImageOrderByRelationAggregateInput>;
  lastName?: Maybe<SortOrder>;
  school?: Maybe<SchoolOrderByWithRelationInput>;
  schoolId?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
};

export type StudentRelationFilter = {
  is?: Maybe<StudentWhereInput>;
  isNot?: Maybe<StudentWhereInput>;
};

export enum StudentScalarFieldEnum {
  CreatedAt = 'createdAt',
  DateOfFinish = 'dateOfFinish',
  FirstName = 'firstName',
  Id = 'id',
  LastName = 'lastName',
  SchoolId = 'schoolId',
  UpdatedAt = 'updatedAt'
}

export type StudentScalarWhereInput = {
  AND?: Maybe<Array<Maybe<StudentScalarWhereInput>>>;
  NOT?: Maybe<Array<Maybe<StudentScalarWhereInput>>>;
  OR?: Maybe<Array<Maybe<StudentScalarWhereInput>>>;
  createdAt?: Maybe<DateTimeFilter>;
  dateOfFinish?: Maybe<DateTimeFilter>;
  firstName?: Maybe<StringFilter>;
  id?: Maybe<IntFilter>;
  lastName?: Maybe<StringFilter>;
  schoolId?: Maybe<IntFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
};

export type StudentScalarWhereWithAggregatesInput = {
  AND?: Maybe<Array<Maybe<StudentScalarWhereWithAggregatesInput>>>;
  NOT?: Maybe<Array<Maybe<StudentScalarWhereWithAggregatesInput>>>;
  OR?: Maybe<Array<Maybe<StudentScalarWhereWithAggregatesInput>>>;
  createdAt?: Maybe<DateTimeWithAggregatesFilter>;
  dateOfFinish?: Maybe<DateTimeWithAggregatesFilter>;
  firstName?: Maybe<StringWithAggregatesFilter>;
  id?: Maybe<IntWithAggregatesFilter>;
  lastName?: Maybe<StringWithAggregatesFilter>;
  schoolId?: Maybe<IntWithAggregatesFilter>;
  updatedAt?: Maybe<DateTimeWithAggregatesFilter>;
};

export type StudentSumAggregateOutputType = {
  __typename?: 'StudentSumAggregateOutputType';
  id?: Maybe<Scalars['Int']>;
  schoolId?: Maybe<Scalars['Int']>;
};

export type StudentSumOrderByAggregateInput = {
  id?: Maybe<SortOrder>;
  schoolId?: Maybe<SortOrder>;
};

export type StudentUncheckedCreateInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  dateOfFinish: Scalars['DateTime'];
  firstName: Scalars['String'];
  id?: Maybe<Scalars['Int']>;
  images?: Maybe<ImageUncheckedCreateNestedManyWithoutStudentInput>;
  lastName: Scalars['String'];
  schoolId: Scalars['Int'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type StudentUncheckedCreateNestedManyWithoutSchoolInput = {
  connect?: Maybe<Array<Maybe<StudentWhereUniqueInput>>>;
  connectOrCreate?: Maybe<Array<Maybe<StudentCreateOrConnectWithoutSchoolInput>>>;
  create?: Maybe<Array<Maybe<StudentCreateWithoutSchoolInput>>>;
  createMany?: Maybe<StudentCreateManySchoolInputEnvelope>;
};

export type StudentUncheckedCreateWithoutImagesInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  dateOfFinish: Scalars['DateTime'];
  firstName: Scalars['String'];
  id?: Maybe<Scalars['Int']>;
  lastName: Scalars['String'];
  schoolId: Scalars['Int'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type StudentUncheckedCreateWithoutSchoolInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  dateOfFinish: Scalars['DateTime'];
  firstName: Scalars['String'];
  id?: Maybe<Scalars['Int']>;
  images?: Maybe<ImageUncheckedCreateNestedManyWithoutStudentInput>;
  lastName: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type StudentUncheckedUpdateInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  dateOfFinish?: Maybe<DateTimeFieldUpdateOperationsInput>;
  firstName?: Maybe<StringFieldUpdateOperationsInput>;
  id?: Maybe<IntFieldUpdateOperationsInput>;
  images?: Maybe<ImageUncheckedUpdateManyWithoutStudentInput>;
  lastName?: Maybe<StringFieldUpdateOperationsInput>;
  schoolId?: Maybe<IntFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type StudentUncheckedUpdateManyInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  dateOfFinish?: Maybe<DateTimeFieldUpdateOperationsInput>;
  firstName?: Maybe<StringFieldUpdateOperationsInput>;
  id?: Maybe<IntFieldUpdateOperationsInput>;
  lastName?: Maybe<StringFieldUpdateOperationsInput>;
  schoolId?: Maybe<IntFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type StudentUncheckedUpdateManyWithoutSchoolInput = {
  connect?: Maybe<Array<Maybe<StudentWhereUniqueInput>>>;
  connectOrCreate?: Maybe<Array<Maybe<StudentCreateOrConnectWithoutSchoolInput>>>;
  create?: Maybe<Array<Maybe<StudentCreateWithoutSchoolInput>>>;
  createMany?: Maybe<StudentCreateManySchoolInputEnvelope>;
  delete?: Maybe<Array<Maybe<StudentWhereUniqueInput>>>;
  deleteMany?: Maybe<Array<Maybe<StudentScalarWhereInput>>>;
  disconnect?: Maybe<Array<Maybe<StudentWhereUniqueInput>>>;
  set?: Maybe<Array<Maybe<StudentWhereUniqueInput>>>;
  update?: Maybe<Array<Maybe<StudentUpdateWithWhereUniqueWithoutSchoolInput>>>;
  updateMany?: Maybe<Array<Maybe<StudentUpdateManyWithWhereWithoutSchoolInput>>>;
  upsert?: Maybe<Array<Maybe<StudentUpsertWithWhereUniqueWithoutSchoolInput>>>;
};

export type StudentUncheckedUpdateManyWithoutStudentsInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  dateOfFinish?: Maybe<DateTimeFieldUpdateOperationsInput>;
  firstName?: Maybe<StringFieldUpdateOperationsInput>;
  id?: Maybe<IntFieldUpdateOperationsInput>;
  lastName?: Maybe<StringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type StudentUncheckedUpdateWithoutImagesInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  dateOfFinish?: Maybe<DateTimeFieldUpdateOperationsInput>;
  firstName?: Maybe<StringFieldUpdateOperationsInput>;
  id?: Maybe<IntFieldUpdateOperationsInput>;
  lastName?: Maybe<StringFieldUpdateOperationsInput>;
  schoolId?: Maybe<IntFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type StudentUncheckedUpdateWithoutSchoolInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  dateOfFinish?: Maybe<DateTimeFieldUpdateOperationsInput>;
  firstName?: Maybe<StringFieldUpdateOperationsInput>;
  id?: Maybe<IntFieldUpdateOperationsInput>;
  images?: Maybe<ImageUncheckedUpdateManyWithoutStudentInput>;
  lastName?: Maybe<StringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type StudentUpdateInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  dateOfFinish?: Maybe<DateTimeFieldUpdateOperationsInput>;
  firstName?: Maybe<StringFieldUpdateOperationsInput>;
  images?: Maybe<ImageUpdateManyWithoutStudentInput>;
  lastName?: Maybe<StringFieldUpdateOperationsInput>;
  school?: Maybe<SchoolUpdateOneRequiredWithoutStudentsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type StudentUpdateManyMutationInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  dateOfFinish?: Maybe<DateTimeFieldUpdateOperationsInput>;
  firstName?: Maybe<StringFieldUpdateOperationsInput>;
  lastName?: Maybe<StringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type StudentUpdateManyWithWhereWithoutSchoolInput = {
  data: StudentUncheckedUpdateManyWithoutStudentsInput;
  where: StudentScalarWhereInput;
};

export type StudentUpdateManyWithoutSchoolInput = {
  connect?: Maybe<Array<Maybe<StudentWhereUniqueInput>>>;
  connectOrCreate?: Maybe<Array<Maybe<StudentCreateOrConnectWithoutSchoolInput>>>;
  create?: Maybe<Array<Maybe<StudentCreateWithoutSchoolInput>>>;
  createMany?: Maybe<StudentCreateManySchoolInputEnvelope>;
  delete?: Maybe<Array<Maybe<StudentWhereUniqueInput>>>;
  deleteMany?: Maybe<Array<Maybe<StudentScalarWhereInput>>>;
  disconnect?: Maybe<Array<Maybe<StudentWhereUniqueInput>>>;
  set?: Maybe<Array<Maybe<StudentWhereUniqueInput>>>;
  update?: Maybe<Array<Maybe<StudentUpdateWithWhereUniqueWithoutSchoolInput>>>;
  updateMany?: Maybe<Array<Maybe<StudentUpdateManyWithWhereWithoutSchoolInput>>>;
  upsert?: Maybe<Array<Maybe<StudentUpsertWithWhereUniqueWithoutSchoolInput>>>;
};

export type StudentUpdateOneWithoutImagesInput = {
  connect?: Maybe<StudentWhereUniqueInput>;
  connectOrCreate?: Maybe<StudentCreateOrConnectWithoutImagesInput>;
  create?: Maybe<StudentUncheckedCreateWithoutImagesInput>;
  delete?: Maybe<Scalars['Boolean']>;
  disconnect?: Maybe<Scalars['Boolean']>;
  update?: Maybe<StudentUncheckedUpdateWithoutImagesInput>;
  upsert?: Maybe<StudentUpsertWithoutImagesInput>;
};

export type StudentUpdateWithWhereUniqueWithoutSchoolInput = {
  data: StudentUncheckedUpdateWithoutSchoolInput;
  where: StudentWhereUniqueInput;
};

export type StudentUpdateWithoutImagesInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  dateOfFinish?: Maybe<DateTimeFieldUpdateOperationsInput>;
  firstName?: Maybe<StringFieldUpdateOperationsInput>;
  lastName?: Maybe<StringFieldUpdateOperationsInput>;
  school?: Maybe<SchoolUpdateOneRequiredWithoutStudentsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type StudentUpdateWithoutSchoolInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  dateOfFinish?: Maybe<DateTimeFieldUpdateOperationsInput>;
  firstName?: Maybe<StringFieldUpdateOperationsInput>;
  images?: Maybe<ImageUpdateManyWithoutStudentInput>;
  lastName?: Maybe<StringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type StudentUpsertWithWhereUniqueWithoutSchoolInput = {
  create: StudentUncheckedCreateWithoutSchoolInput;
  update: StudentUncheckedUpdateWithoutSchoolInput;
  where: StudentWhereUniqueInput;
};

export type StudentUpsertWithoutImagesInput = {
  create: StudentUncheckedCreateWithoutImagesInput;
  update: StudentUncheckedUpdateWithoutImagesInput;
};

export type StudentWhereInput = {
  AND?: Maybe<Array<Maybe<StudentWhereInput>>>;
  NOT?: Maybe<Array<Maybe<StudentWhereInput>>>;
  OR?: Maybe<Array<Maybe<StudentWhereInput>>>;
  createdAt?: Maybe<DateTimeFilter>;
  dateOfFinish?: Maybe<DateTimeFilter>;
  firstName?: Maybe<StringFilter>;
  id?: Maybe<IntFilter>;
  images?: Maybe<ImageListRelationFilter>;
  lastName?: Maybe<StringFilter>;
  school?: Maybe<SchoolWhereInput>;
  schoolId?: Maybe<IntFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
};

export type StudentWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>;
};

export type Subject = {
  __typename?: 'Subject';
  _count?: Maybe<SubjectCountOutputType>;
  createdAt: Scalars['DateTime'];
  descriptionEn?: Maybe<Scalars['String']>;
  descriptionKz?: Maybe<Scalars['String']>;
  descriptionRu?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  schools: Array<Teacher>;
  titleEn: Scalars['String'];
  titleKz: Scalars['String'];
  titleRu: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};


export type SubjectSchoolsArgs = {
  cursor?: Maybe<TeacherWhereUniqueInput>;
  distinct?: Maybe<TeacherScalarFieldEnum>;
  orderBy?: Maybe<TeacherOrderByWithRelationInput>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<TeacherWhereInput>;
};

export type SubjectAvgAggregateOutputType = {
  __typename?: 'SubjectAvgAggregateOutputType';
  id?: Maybe<Scalars['Float']>;
};

export type SubjectAvgOrderByAggregateInput = {
  id?: Maybe<SortOrder>;
};

export type SubjectCountAggregateOutputType = {
  __typename?: 'SubjectCountAggregateOutputType';
  _all: Scalars['Int'];
  createdAt: Scalars['Int'];
  descriptionEn: Scalars['Int'];
  descriptionKz: Scalars['Int'];
  descriptionRu: Scalars['Int'];
  id: Scalars['Int'];
  titleEn: Scalars['Int'];
  titleKz: Scalars['Int'];
  titleRu: Scalars['Int'];
  updatedAt: Scalars['Int'];
};

export type SubjectCountOrderByAggregateInput = {
  createdAt?: Maybe<SortOrder>;
  descriptionEn?: Maybe<SortOrder>;
  descriptionKz?: Maybe<SortOrder>;
  descriptionRu?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  titleEn?: Maybe<SortOrder>;
  titleKz?: Maybe<SortOrder>;
  titleRu?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
};

export type SubjectCountOutputType = {
  __typename?: 'SubjectCountOutputType';
  schools: Scalars['Int'];
};

export type SubjectCreateInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  descriptionEn?: Maybe<Scalars['String']>;
  descriptionKz?: Maybe<Scalars['String']>;
  descriptionRu?: Maybe<Scalars['String']>;
  schools?: Maybe<TeacherCreateNestedManyWithoutSubjectInput>;
  titleEn: Scalars['String'];
  titleKz: Scalars['String'];
  titleRu: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type SubjectCreateManyInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  descriptionEn?: Maybe<Scalars['String']>;
  descriptionKz?: Maybe<Scalars['String']>;
  descriptionRu?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  titleEn: Scalars['String'];
  titleKz: Scalars['String'];
  titleRu: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type SubjectCreateNestedOneWithoutSchoolsInput = {
  connect?: Maybe<SubjectWhereUniqueInput>;
  connectOrCreate?: Maybe<SubjectCreateOrConnectWithoutSchoolsInput>;
  create?: Maybe<SubjectUncheckedCreateWithoutSchoolsInput>;
};

export type SubjectCreateOrConnectWithoutSchoolsInput = {
  create: SubjectUncheckedCreateWithoutSchoolsInput;
  where: SubjectWhereUniqueInput;
};

export type SubjectCreateWithoutSchoolsInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  descriptionEn?: Maybe<Scalars['String']>;
  descriptionKz?: Maybe<Scalars['String']>;
  descriptionRu?: Maybe<Scalars['String']>;
  titleEn: Scalars['String'];
  titleKz: Scalars['String'];
  titleRu: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type SubjectMaxAggregateOutputType = {
  __typename?: 'SubjectMaxAggregateOutputType';
  createdAt?: Maybe<Scalars['DateTime']>;
  descriptionEn?: Maybe<Scalars['String']>;
  descriptionKz?: Maybe<Scalars['String']>;
  descriptionRu?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  titleEn?: Maybe<Scalars['String']>;
  titleKz?: Maybe<Scalars['String']>;
  titleRu?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type SubjectMaxOrderByAggregateInput = {
  createdAt?: Maybe<SortOrder>;
  descriptionEn?: Maybe<SortOrder>;
  descriptionKz?: Maybe<SortOrder>;
  descriptionRu?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  titleEn?: Maybe<SortOrder>;
  titleKz?: Maybe<SortOrder>;
  titleRu?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
};

export type SubjectMinAggregateOutputType = {
  __typename?: 'SubjectMinAggregateOutputType';
  createdAt?: Maybe<Scalars['DateTime']>;
  descriptionEn?: Maybe<Scalars['String']>;
  descriptionKz?: Maybe<Scalars['String']>;
  descriptionRu?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  titleEn?: Maybe<Scalars['String']>;
  titleKz?: Maybe<Scalars['String']>;
  titleRu?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type SubjectMinOrderByAggregateInput = {
  createdAt?: Maybe<SortOrder>;
  descriptionEn?: Maybe<SortOrder>;
  descriptionKz?: Maybe<SortOrder>;
  descriptionRu?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  titleEn?: Maybe<SortOrder>;
  titleKz?: Maybe<SortOrder>;
  titleRu?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
};

export type SubjectOrderByWithAggregationInput = {
  _avg?: Maybe<SubjectAvgOrderByAggregateInput>;
  _count?: Maybe<SubjectCountOrderByAggregateInput>;
  _max?: Maybe<SubjectMaxOrderByAggregateInput>;
  _min?: Maybe<SubjectMinOrderByAggregateInput>;
  _sum?: Maybe<SubjectSumOrderByAggregateInput>;
  createdAt?: Maybe<SortOrder>;
  descriptionEn?: Maybe<SortOrder>;
  descriptionKz?: Maybe<SortOrder>;
  descriptionRu?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  titleEn?: Maybe<SortOrder>;
  titleKz?: Maybe<SortOrder>;
  titleRu?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
};

export type SubjectOrderByWithRelationInput = {
  createdAt?: Maybe<SortOrder>;
  descriptionEn?: Maybe<SortOrder>;
  descriptionKz?: Maybe<SortOrder>;
  descriptionRu?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  schools?: Maybe<TeacherOrderByRelationAggregateInput>;
  titleEn?: Maybe<SortOrder>;
  titleKz?: Maybe<SortOrder>;
  titleRu?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
};

export type SubjectRelationFilter = {
  is?: Maybe<SubjectWhereInput>;
  isNot?: Maybe<SubjectWhereInput>;
};

export enum SubjectScalarFieldEnum {
  CreatedAt = 'createdAt',
  DescriptionEn = 'descriptionEn',
  DescriptionKz = 'descriptionKz',
  DescriptionRu = 'descriptionRu',
  Id = 'id',
  TitleEn = 'titleEn',
  TitleKz = 'titleKz',
  TitleRu = 'titleRu',
  UpdatedAt = 'updatedAt'
}

export type SubjectScalarWhereWithAggregatesInput = {
  AND?: Maybe<Array<Maybe<SubjectScalarWhereWithAggregatesInput>>>;
  NOT?: Maybe<Array<Maybe<SubjectScalarWhereWithAggregatesInput>>>;
  OR?: Maybe<Array<Maybe<SubjectScalarWhereWithAggregatesInput>>>;
  createdAt?: Maybe<DateTimeWithAggregatesFilter>;
  descriptionEn?: Maybe<StringNullableWithAggregatesFilter>;
  descriptionKz?: Maybe<StringNullableWithAggregatesFilter>;
  descriptionRu?: Maybe<StringNullableWithAggregatesFilter>;
  id?: Maybe<IntWithAggregatesFilter>;
  titleEn?: Maybe<StringWithAggregatesFilter>;
  titleKz?: Maybe<StringWithAggregatesFilter>;
  titleRu?: Maybe<StringWithAggregatesFilter>;
  updatedAt?: Maybe<DateTimeWithAggregatesFilter>;
};

export type SubjectSumAggregateOutputType = {
  __typename?: 'SubjectSumAggregateOutputType';
  id?: Maybe<Scalars['Int']>;
};

export type SubjectSumOrderByAggregateInput = {
  id?: Maybe<SortOrder>;
};

export type SubjectUncheckedCreateInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  descriptionEn?: Maybe<Scalars['String']>;
  descriptionKz?: Maybe<Scalars['String']>;
  descriptionRu?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  schools?: Maybe<TeacherUncheckedCreateNestedManyWithoutSubjectInput>;
  titleEn: Scalars['String'];
  titleKz: Scalars['String'];
  titleRu: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type SubjectUncheckedCreateWithoutSchoolsInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  descriptionEn?: Maybe<Scalars['String']>;
  descriptionKz?: Maybe<Scalars['String']>;
  descriptionRu?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  titleEn: Scalars['String'];
  titleKz: Scalars['String'];
  titleRu: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type SubjectUncheckedUpdateInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  descriptionEn?: Maybe<NullableStringFieldUpdateOperationsInput>;
  descriptionKz?: Maybe<NullableStringFieldUpdateOperationsInput>;
  descriptionRu?: Maybe<NullableStringFieldUpdateOperationsInput>;
  id?: Maybe<IntFieldUpdateOperationsInput>;
  schools?: Maybe<TeacherUncheckedUpdateManyWithoutSubjectInput>;
  titleEn?: Maybe<StringFieldUpdateOperationsInput>;
  titleKz?: Maybe<StringFieldUpdateOperationsInput>;
  titleRu?: Maybe<StringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type SubjectUncheckedUpdateManyInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  descriptionEn?: Maybe<NullableStringFieldUpdateOperationsInput>;
  descriptionKz?: Maybe<NullableStringFieldUpdateOperationsInput>;
  descriptionRu?: Maybe<NullableStringFieldUpdateOperationsInput>;
  id?: Maybe<IntFieldUpdateOperationsInput>;
  titleEn?: Maybe<StringFieldUpdateOperationsInput>;
  titleKz?: Maybe<StringFieldUpdateOperationsInput>;
  titleRu?: Maybe<StringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type SubjectUncheckedUpdateWithoutSchoolsInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  descriptionEn?: Maybe<NullableStringFieldUpdateOperationsInput>;
  descriptionKz?: Maybe<NullableStringFieldUpdateOperationsInput>;
  descriptionRu?: Maybe<NullableStringFieldUpdateOperationsInput>;
  id?: Maybe<IntFieldUpdateOperationsInput>;
  titleEn?: Maybe<StringFieldUpdateOperationsInput>;
  titleKz?: Maybe<StringFieldUpdateOperationsInput>;
  titleRu?: Maybe<StringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type SubjectUpdateInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  descriptionEn?: Maybe<NullableStringFieldUpdateOperationsInput>;
  descriptionKz?: Maybe<NullableStringFieldUpdateOperationsInput>;
  descriptionRu?: Maybe<NullableStringFieldUpdateOperationsInput>;
  schools?: Maybe<TeacherUpdateManyWithoutSubjectInput>;
  titleEn?: Maybe<StringFieldUpdateOperationsInput>;
  titleKz?: Maybe<StringFieldUpdateOperationsInput>;
  titleRu?: Maybe<StringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type SubjectUpdateManyMutationInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  descriptionEn?: Maybe<NullableStringFieldUpdateOperationsInput>;
  descriptionKz?: Maybe<NullableStringFieldUpdateOperationsInput>;
  descriptionRu?: Maybe<NullableStringFieldUpdateOperationsInput>;
  titleEn?: Maybe<StringFieldUpdateOperationsInput>;
  titleKz?: Maybe<StringFieldUpdateOperationsInput>;
  titleRu?: Maybe<StringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type SubjectUpdateOneWithoutSchoolsInput = {
  connect?: Maybe<SubjectWhereUniqueInput>;
  connectOrCreate?: Maybe<SubjectCreateOrConnectWithoutSchoolsInput>;
  create?: Maybe<SubjectUncheckedCreateWithoutSchoolsInput>;
  delete?: Maybe<Scalars['Boolean']>;
  disconnect?: Maybe<Scalars['Boolean']>;
  update?: Maybe<SubjectUncheckedUpdateWithoutSchoolsInput>;
  upsert?: Maybe<SubjectUpsertWithoutSchoolsInput>;
};

export type SubjectUpdateWithoutSchoolsInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  descriptionEn?: Maybe<NullableStringFieldUpdateOperationsInput>;
  descriptionKz?: Maybe<NullableStringFieldUpdateOperationsInput>;
  descriptionRu?: Maybe<NullableStringFieldUpdateOperationsInput>;
  titleEn?: Maybe<StringFieldUpdateOperationsInput>;
  titleKz?: Maybe<StringFieldUpdateOperationsInput>;
  titleRu?: Maybe<StringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type SubjectUpsertWithoutSchoolsInput = {
  create: SubjectUncheckedCreateWithoutSchoolsInput;
  update: SubjectUncheckedUpdateWithoutSchoolsInput;
};

export type SubjectWhereInput = {
  AND?: Maybe<Array<Maybe<SubjectWhereInput>>>;
  NOT?: Maybe<Array<Maybe<SubjectWhereInput>>>;
  OR?: Maybe<Array<Maybe<SubjectWhereInput>>>;
  createdAt?: Maybe<DateTimeFilter>;
  descriptionEn?: Maybe<StringNullableFilter>;
  descriptionKz?: Maybe<StringNullableFilter>;
  descriptionRu?: Maybe<StringNullableFilter>;
  id?: Maybe<IntFilter>;
  schools?: Maybe<TeacherListRelationFilter>;
  titleEn?: Maybe<StringFilter>;
  titleKz?: Maybe<StringFilter>;
  titleRu?: Maybe<StringFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
};

export type SubjectWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>;
};

export type Teacher = {
  __typename?: 'Teacher';
  _count?: Maybe<TeacherCountOutputType>;
  createdAt: Scalars['DateTime'];
  firstName: Scalars['String'];
  id: Scalars['Int'];
  images: Array<Image>;
  lastName: Scalars['String'];
  subject?: Maybe<Subject>;
  subjectId?: Maybe<Scalars['Int']>;
  updatedAt: Scalars['DateTime'];
};


export type TeacherImagesArgs = {
  cursor?: Maybe<ImageWhereUniqueInput>;
  distinct?: Maybe<ImageScalarFieldEnum>;
  orderBy?: Maybe<ImageOrderByWithRelationInput>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<ImageWhereInput>;
};

export type TeacherAvgAggregateOutputType = {
  __typename?: 'TeacherAvgAggregateOutputType';
  id?: Maybe<Scalars['Float']>;
  subjectId?: Maybe<Scalars['Float']>;
};

export type TeacherAvgOrderByAggregateInput = {
  id?: Maybe<SortOrder>;
  subjectId?: Maybe<SortOrder>;
};

export type TeacherCountAggregateOutputType = {
  __typename?: 'TeacherCountAggregateOutputType';
  _all: Scalars['Int'];
  createdAt: Scalars['Int'];
  firstName: Scalars['Int'];
  id: Scalars['Int'];
  lastName: Scalars['Int'];
  subjectId: Scalars['Int'];
  updatedAt: Scalars['Int'];
};

export type TeacherCountOrderByAggregateInput = {
  createdAt?: Maybe<SortOrder>;
  firstName?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  lastName?: Maybe<SortOrder>;
  subjectId?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
};

export type TeacherCountOutputType = {
  __typename?: 'TeacherCountOutputType';
  images: Scalars['Int'];
};

export type TeacherCreateInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  firstName: Scalars['String'];
  images?: Maybe<ImageCreateNestedManyWithoutTeacherInput>;
  lastName: Scalars['String'];
  subject?: Maybe<SubjectCreateNestedOneWithoutSchoolsInput>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type TeacherCreateManyInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  firstName: Scalars['String'];
  id?: Maybe<Scalars['Int']>;
  lastName: Scalars['String'];
  subjectId?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type TeacherCreateManySubjectInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  firstName: Scalars['String'];
  id?: Maybe<Scalars['Int']>;
  lastName: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type TeacherCreateManySubjectInputEnvelope = {
  data: TeacherCreateManySubjectInput;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type TeacherCreateNestedManyWithoutSubjectInput = {
  connect?: Maybe<Array<Maybe<TeacherWhereUniqueInput>>>;
  connectOrCreate?: Maybe<Array<Maybe<TeacherCreateOrConnectWithoutSubjectInput>>>;
  create?: Maybe<Array<Maybe<TeacherCreateWithoutSubjectInput>>>;
  createMany?: Maybe<TeacherCreateManySubjectInputEnvelope>;
};

export type TeacherCreateNestedOneWithoutImagesInput = {
  connect?: Maybe<TeacherWhereUniqueInput>;
  connectOrCreate?: Maybe<TeacherCreateOrConnectWithoutImagesInput>;
  create?: Maybe<TeacherUncheckedCreateWithoutImagesInput>;
};

export type TeacherCreateOrConnectWithoutImagesInput = {
  create: TeacherUncheckedCreateWithoutImagesInput;
  where: TeacherWhereUniqueInput;
};

export type TeacherCreateOrConnectWithoutSubjectInput = {
  create: TeacherUncheckedCreateWithoutSubjectInput;
  where: TeacherWhereUniqueInput;
};

export type TeacherCreateWithoutImagesInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  subject?: Maybe<SubjectCreateNestedOneWithoutSchoolsInput>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type TeacherCreateWithoutSubjectInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  firstName: Scalars['String'];
  images?: Maybe<ImageCreateNestedManyWithoutTeacherInput>;
  lastName: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type TeacherListRelationFilter = {
  every?: Maybe<TeacherWhereInput>;
  none?: Maybe<TeacherWhereInput>;
  some?: Maybe<TeacherWhereInput>;
};

export type TeacherMaxAggregateOutputType = {
  __typename?: 'TeacherMaxAggregateOutputType';
  createdAt?: Maybe<Scalars['DateTime']>;
  firstName?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  lastName?: Maybe<Scalars['String']>;
  subjectId?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type TeacherMaxOrderByAggregateInput = {
  createdAt?: Maybe<SortOrder>;
  firstName?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  lastName?: Maybe<SortOrder>;
  subjectId?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
};

export type TeacherMinAggregateOutputType = {
  __typename?: 'TeacherMinAggregateOutputType';
  createdAt?: Maybe<Scalars['DateTime']>;
  firstName?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  lastName?: Maybe<Scalars['String']>;
  subjectId?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type TeacherMinOrderByAggregateInput = {
  createdAt?: Maybe<SortOrder>;
  firstName?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  lastName?: Maybe<SortOrder>;
  subjectId?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
};

export type TeacherOrderByRelationAggregateInput = {
  _count?: Maybe<SortOrder>;
};

export type TeacherOrderByWithAggregationInput = {
  _avg?: Maybe<TeacherAvgOrderByAggregateInput>;
  _count?: Maybe<TeacherCountOrderByAggregateInput>;
  _max?: Maybe<TeacherMaxOrderByAggregateInput>;
  _min?: Maybe<TeacherMinOrderByAggregateInput>;
  _sum?: Maybe<TeacherSumOrderByAggregateInput>;
  createdAt?: Maybe<SortOrder>;
  firstName?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  lastName?: Maybe<SortOrder>;
  subjectId?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
};

export type TeacherOrderByWithRelationInput = {
  createdAt?: Maybe<SortOrder>;
  firstName?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  images?: Maybe<ImageOrderByRelationAggregateInput>;
  lastName?: Maybe<SortOrder>;
  subject?: Maybe<SubjectOrderByWithRelationInput>;
  subjectId?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
};

export type TeacherRelationFilter = {
  is?: Maybe<TeacherWhereInput>;
  isNot?: Maybe<TeacherWhereInput>;
};

export enum TeacherScalarFieldEnum {
  CreatedAt = 'createdAt',
  FirstName = 'firstName',
  Id = 'id',
  LastName = 'lastName',
  SubjectId = 'subjectId',
  UpdatedAt = 'updatedAt'
}

export type TeacherScalarWhereInput = {
  AND?: Maybe<Array<Maybe<TeacherScalarWhereInput>>>;
  NOT?: Maybe<Array<Maybe<TeacherScalarWhereInput>>>;
  OR?: Maybe<Array<Maybe<TeacherScalarWhereInput>>>;
  createdAt?: Maybe<DateTimeFilter>;
  firstName?: Maybe<StringFilter>;
  id?: Maybe<IntFilter>;
  lastName?: Maybe<StringFilter>;
  subjectId?: Maybe<IntNullableFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
};

export type TeacherScalarWhereWithAggregatesInput = {
  AND?: Maybe<Array<Maybe<TeacherScalarWhereWithAggregatesInput>>>;
  NOT?: Maybe<Array<Maybe<TeacherScalarWhereWithAggregatesInput>>>;
  OR?: Maybe<Array<Maybe<TeacherScalarWhereWithAggregatesInput>>>;
  createdAt?: Maybe<DateTimeWithAggregatesFilter>;
  firstName?: Maybe<StringWithAggregatesFilter>;
  id?: Maybe<IntWithAggregatesFilter>;
  lastName?: Maybe<StringWithAggregatesFilter>;
  subjectId?: Maybe<IntNullableWithAggregatesFilter>;
  updatedAt?: Maybe<DateTimeWithAggregatesFilter>;
};

export type TeacherSumAggregateOutputType = {
  __typename?: 'TeacherSumAggregateOutputType';
  id?: Maybe<Scalars['Int']>;
  subjectId?: Maybe<Scalars['Int']>;
};

export type TeacherSumOrderByAggregateInput = {
  id?: Maybe<SortOrder>;
  subjectId?: Maybe<SortOrder>;
};

export type TeacherUncheckedCreateInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  firstName: Scalars['String'];
  id?: Maybe<Scalars['Int']>;
  images?: Maybe<ImageUncheckedCreateNestedManyWithoutTeacherInput>;
  lastName: Scalars['String'];
  subjectId?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type TeacherUncheckedCreateNestedManyWithoutSubjectInput = {
  connect?: Maybe<Array<Maybe<TeacherWhereUniqueInput>>>;
  connectOrCreate?: Maybe<Array<Maybe<TeacherCreateOrConnectWithoutSubjectInput>>>;
  create?: Maybe<Array<Maybe<TeacherCreateWithoutSubjectInput>>>;
  createMany?: Maybe<TeacherCreateManySubjectInputEnvelope>;
};

export type TeacherUncheckedCreateWithoutImagesInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  firstName: Scalars['String'];
  id?: Maybe<Scalars['Int']>;
  lastName: Scalars['String'];
  subjectId?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type TeacherUncheckedCreateWithoutSubjectInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  firstName: Scalars['String'];
  id?: Maybe<Scalars['Int']>;
  images?: Maybe<ImageUncheckedCreateNestedManyWithoutTeacherInput>;
  lastName: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type TeacherUncheckedUpdateInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  firstName?: Maybe<StringFieldUpdateOperationsInput>;
  id?: Maybe<IntFieldUpdateOperationsInput>;
  images?: Maybe<ImageUncheckedUpdateManyWithoutTeacherInput>;
  lastName?: Maybe<StringFieldUpdateOperationsInput>;
  subjectId?: Maybe<NullableIntFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type TeacherUncheckedUpdateManyInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  firstName?: Maybe<StringFieldUpdateOperationsInput>;
  id?: Maybe<IntFieldUpdateOperationsInput>;
  lastName?: Maybe<StringFieldUpdateOperationsInput>;
  subjectId?: Maybe<NullableIntFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type TeacherUncheckedUpdateManyWithoutSchoolsInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  firstName?: Maybe<StringFieldUpdateOperationsInput>;
  id?: Maybe<IntFieldUpdateOperationsInput>;
  lastName?: Maybe<StringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type TeacherUncheckedUpdateManyWithoutSubjectInput = {
  connect?: Maybe<Array<Maybe<TeacherWhereUniqueInput>>>;
  connectOrCreate?: Maybe<Array<Maybe<TeacherCreateOrConnectWithoutSubjectInput>>>;
  create?: Maybe<Array<Maybe<TeacherCreateWithoutSubjectInput>>>;
  createMany?: Maybe<TeacherCreateManySubjectInputEnvelope>;
  delete?: Maybe<Array<Maybe<TeacherWhereUniqueInput>>>;
  deleteMany?: Maybe<Array<Maybe<TeacherScalarWhereInput>>>;
  disconnect?: Maybe<Array<Maybe<TeacherWhereUniqueInput>>>;
  set?: Maybe<Array<Maybe<TeacherWhereUniqueInput>>>;
  update?: Maybe<Array<Maybe<TeacherUpdateWithWhereUniqueWithoutSubjectInput>>>;
  updateMany?: Maybe<Array<Maybe<TeacherUpdateManyWithWhereWithoutSubjectInput>>>;
  upsert?: Maybe<Array<Maybe<TeacherUpsertWithWhereUniqueWithoutSubjectInput>>>;
};

export type TeacherUncheckedUpdateWithoutImagesInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  firstName?: Maybe<StringFieldUpdateOperationsInput>;
  id?: Maybe<IntFieldUpdateOperationsInput>;
  lastName?: Maybe<StringFieldUpdateOperationsInput>;
  subjectId?: Maybe<NullableIntFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type TeacherUncheckedUpdateWithoutSubjectInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  firstName?: Maybe<StringFieldUpdateOperationsInput>;
  id?: Maybe<IntFieldUpdateOperationsInput>;
  images?: Maybe<ImageUncheckedUpdateManyWithoutTeacherInput>;
  lastName?: Maybe<StringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type TeacherUpdateInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  firstName?: Maybe<StringFieldUpdateOperationsInput>;
  images?: Maybe<ImageUpdateManyWithoutTeacherInput>;
  lastName?: Maybe<StringFieldUpdateOperationsInput>;
  subject?: Maybe<SubjectUpdateOneWithoutSchoolsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type TeacherUpdateManyMutationInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  firstName?: Maybe<StringFieldUpdateOperationsInput>;
  lastName?: Maybe<StringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type TeacherUpdateManyWithWhereWithoutSubjectInput = {
  data: TeacherUncheckedUpdateManyWithoutSchoolsInput;
  where: TeacherScalarWhereInput;
};

export type TeacherUpdateManyWithoutSubjectInput = {
  connect?: Maybe<Array<Maybe<TeacherWhereUniqueInput>>>;
  connectOrCreate?: Maybe<Array<Maybe<TeacherCreateOrConnectWithoutSubjectInput>>>;
  create?: Maybe<Array<Maybe<TeacherCreateWithoutSubjectInput>>>;
  createMany?: Maybe<TeacherCreateManySubjectInputEnvelope>;
  delete?: Maybe<Array<Maybe<TeacherWhereUniqueInput>>>;
  deleteMany?: Maybe<Array<Maybe<TeacherScalarWhereInput>>>;
  disconnect?: Maybe<Array<Maybe<TeacherWhereUniqueInput>>>;
  set?: Maybe<Array<Maybe<TeacherWhereUniqueInput>>>;
  update?: Maybe<Array<Maybe<TeacherUpdateWithWhereUniqueWithoutSubjectInput>>>;
  updateMany?: Maybe<Array<Maybe<TeacherUpdateManyWithWhereWithoutSubjectInput>>>;
  upsert?: Maybe<Array<Maybe<TeacherUpsertWithWhereUniqueWithoutSubjectInput>>>;
};

export type TeacherUpdateOneWithoutImagesInput = {
  connect?: Maybe<TeacherWhereUniqueInput>;
  connectOrCreate?: Maybe<TeacherCreateOrConnectWithoutImagesInput>;
  create?: Maybe<TeacherUncheckedCreateWithoutImagesInput>;
  delete?: Maybe<Scalars['Boolean']>;
  disconnect?: Maybe<Scalars['Boolean']>;
  update?: Maybe<TeacherUncheckedUpdateWithoutImagesInput>;
  upsert?: Maybe<TeacherUpsertWithoutImagesInput>;
};

export type TeacherUpdateWithWhereUniqueWithoutSubjectInput = {
  data: TeacherUncheckedUpdateWithoutSubjectInput;
  where: TeacherWhereUniqueInput;
};

export type TeacherUpdateWithoutImagesInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  firstName?: Maybe<StringFieldUpdateOperationsInput>;
  lastName?: Maybe<StringFieldUpdateOperationsInput>;
  subject?: Maybe<SubjectUpdateOneWithoutSchoolsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type TeacherUpdateWithoutSubjectInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  firstName?: Maybe<StringFieldUpdateOperationsInput>;
  images?: Maybe<ImageUpdateManyWithoutTeacherInput>;
  lastName?: Maybe<StringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type TeacherUpsertWithWhereUniqueWithoutSubjectInput = {
  create: TeacherUncheckedCreateWithoutSubjectInput;
  update: TeacherUncheckedUpdateWithoutSubjectInput;
  where: TeacherWhereUniqueInput;
};

export type TeacherUpsertWithoutImagesInput = {
  create: TeacherUncheckedCreateWithoutImagesInput;
  update: TeacherUncheckedUpdateWithoutImagesInput;
};

export type TeacherWhereInput = {
  AND?: Maybe<Array<Maybe<TeacherWhereInput>>>;
  NOT?: Maybe<Array<Maybe<TeacherWhereInput>>>;
  OR?: Maybe<Array<Maybe<TeacherWhereInput>>>;
  createdAt?: Maybe<DateTimeFilter>;
  firstName?: Maybe<StringFilter>;
  id?: Maybe<IntFilter>;
  images?: Maybe<ImageListRelationFilter>;
  lastName?: Maybe<StringFilter>;
  subject?: Maybe<SubjectWhereInput>;
  subjectId?: Maybe<IntNullableFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
};

export type TeacherWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>;
};

export type UpdateFieldInput = {
  create?: Maybe<Scalars['Boolean']>;
  editor?: Maybe<Scalars['Boolean']>;
  filter?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['String']>;
  isId?: Maybe<Scalars['Boolean']>;
  kind?: Maybe<KindEnum>;
  list?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  order?: Maybe<Scalars['Int']>;
  read?: Maybe<Scalars['Boolean']>;
  relationField?: Maybe<Scalars['Boolean']>;
  required?: Maybe<Scalars['Boolean']>;
  sort?: Maybe<Scalars['Boolean']>;
  title?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  unique?: Maybe<Scalars['Boolean']>;
  update?: Maybe<Scalars['Boolean']>;
  upload?: Maybe<Scalars['Boolean']>;
};

export type UpdateModelInput = {
  create?: Maybe<Scalars['Boolean']>;
  delete?: Maybe<Scalars['Boolean']>;
  displayFields?: Maybe<Array<Maybe<Scalars['String']>>>;
  fields?: Maybe<Array<Maybe<UpdateFieldInput>>>;
  idField?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  update?: Maybe<Scalars['Boolean']>;
};

export type User = {
  __typename?: 'User';
  createdAt: Scalars['DateTime'];
  dateLastLogin: Scalars['DateTime'];
  email: Scalars['String'];
  fio: Scalars['String'];
  id: Scalars['Int'];
  image?: Maybe<Scalars['String']>;
  isAdmin: Scalars['Boolean'];
  isBlocked: Scalars['Boolean'];
  password: Scalars['String'];
  passwordChangedTime: Scalars['DateTime'];
  rememberToken?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
};

export type UserAvgAggregateOutputType = {
  __typename?: 'UserAvgAggregateOutputType';
  id?: Maybe<Scalars['Float']>;
};

export type UserAvgOrderByAggregateInput = {
  id?: Maybe<SortOrder>;
};

export type UserCountAggregateOutputType = {
  __typename?: 'UserCountAggregateOutputType';
  _all: Scalars['Int'];
  createdAt: Scalars['Int'];
  dateLastLogin: Scalars['Int'];
  email: Scalars['Int'];
  fio: Scalars['Int'];
  id: Scalars['Int'];
  image: Scalars['Int'];
  isAdmin: Scalars['Int'];
  isBlocked: Scalars['Int'];
  password: Scalars['Int'];
  passwordChangedTime: Scalars['Int'];
  rememberToken: Scalars['Int'];
  updatedAt: Scalars['Int'];
};

export type UserCountOrderByAggregateInput = {
  createdAt?: Maybe<SortOrder>;
  dateLastLogin?: Maybe<SortOrder>;
  email?: Maybe<SortOrder>;
  fio?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  image?: Maybe<SortOrder>;
  isAdmin?: Maybe<SortOrder>;
  isBlocked?: Maybe<SortOrder>;
  password?: Maybe<SortOrder>;
  passwordChangedTime?: Maybe<SortOrder>;
  rememberToken?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
};

export type UserCreateInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  dateLastLogin?: Maybe<Scalars['DateTime']>;
  email: Scalars['String'];
  fio: Scalars['String'];
  image?: Maybe<Scalars['String']>;
  isAdmin?: Maybe<Scalars['Boolean']>;
  isBlocked?: Maybe<Scalars['Boolean']>;
  password: Scalars['String'];
  passwordChangedTime?: Maybe<Scalars['DateTime']>;
  rememberToken?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type UserCreateManyInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  dateLastLogin?: Maybe<Scalars['DateTime']>;
  email: Scalars['String'];
  fio: Scalars['String'];
  id?: Maybe<Scalars['Int']>;
  image?: Maybe<Scalars['String']>;
  isAdmin?: Maybe<Scalars['Boolean']>;
  isBlocked?: Maybe<Scalars['Boolean']>;
  password: Scalars['String'];
  passwordChangedTime?: Maybe<Scalars['DateTime']>;
  rememberToken?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type UserMaxAggregateOutputType = {
  __typename?: 'UserMaxAggregateOutputType';
  createdAt?: Maybe<Scalars['DateTime']>;
  dateLastLogin?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  fio?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  image?: Maybe<Scalars['String']>;
  isAdmin?: Maybe<Scalars['Boolean']>;
  isBlocked?: Maybe<Scalars['Boolean']>;
  password?: Maybe<Scalars['String']>;
  passwordChangedTime?: Maybe<Scalars['DateTime']>;
  rememberToken?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type UserMaxOrderByAggregateInput = {
  createdAt?: Maybe<SortOrder>;
  dateLastLogin?: Maybe<SortOrder>;
  email?: Maybe<SortOrder>;
  fio?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  image?: Maybe<SortOrder>;
  isAdmin?: Maybe<SortOrder>;
  isBlocked?: Maybe<SortOrder>;
  password?: Maybe<SortOrder>;
  passwordChangedTime?: Maybe<SortOrder>;
  rememberToken?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
};

export type UserMinAggregateOutputType = {
  __typename?: 'UserMinAggregateOutputType';
  createdAt?: Maybe<Scalars['DateTime']>;
  dateLastLogin?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  fio?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  image?: Maybe<Scalars['String']>;
  isAdmin?: Maybe<Scalars['Boolean']>;
  isBlocked?: Maybe<Scalars['Boolean']>;
  password?: Maybe<Scalars['String']>;
  passwordChangedTime?: Maybe<Scalars['DateTime']>;
  rememberToken?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type UserMinOrderByAggregateInput = {
  createdAt?: Maybe<SortOrder>;
  dateLastLogin?: Maybe<SortOrder>;
  email?: Maybe<SortOrder>;
  fio?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  image?: Maybe<SortOrder>;
  isAdmin?: Maybe<SortOrder>;
  isBlocked?: Maybe<SortOrder>;
  password?: Maybe<SortOrder>;
  passwordChangedTime?: Maybe<SortOrder>;
  rememberToken?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
};

export type UserOrderByWithAggregationInput = {
  _avg?: Maybe<UserAvgOrderByAggregateInput>;
  _count?: Maybe<UserCountOrderByAggregateInput>;
  _max?: Maybe<UserMaxOrderByAggregateInput>;
  _min?: Maybe<UserMinOrderByAggregateInput>;
  _sum?: Maybe<UserSumOrderByAggregateInput>;
  createdAt?: Maybe<SortOrder>;
  dateLastLogin?: Maybe<SortOrder>;
  email?: Maybe<SortOrder>;
  fio?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  image?: Maybe<SortOrder>;
  isAdmin?: Maybe<SortOrder>;
  isBlocked?: Maybe<SortOrder>;
  password?: Maybe<SortOrder>;
  passwordChangedTime?: Maybe<SortOrder>;
  rememberToken?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
};

export type UserOrderByWithRelationInput = {
  createdAt?: Maybe<SortOrder>;
  dateLastLogin?: Maybe<SortOrder>;
  email?: Maybe<SortOrder>;
  fio?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  image?: Maybe<SortOrder>;
  isAdmin?: Maybe<SortOrder>;
  isBlocked?: Maybe<SortOrder>;
  password?: Maybe<SortOrder>;
  passwordChangedTime?: Maybe<SortOrder>;
  rememberToken?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
};

export enum UserScalarFieldEnum {
  CreatedAt = 'createdAt',
  DateLastLogin = 'dateLastLogin',
  Email = 'email',
  Fio = 'fio',
  Id = 'id',
  Image = 'image',
  IsAdmin = 'isAdmin',
  IsBlocked = 'isBlocked',
  Password = 'password',
  PasswordChangedTime = 'passwordChangedTime',
  RememberToken = 'rememberToken',
  UpdatedAt = 'updatedAt'
}

export type UserScalarWhereWithAggregatesInput = {
  AND?: Maybe<Array<Maybe<UserScalarWhereWithAggregatesInput>>>;
  NOT?: Maybe<Array<Maybe<UserScalarWhereWithAggregatesInput>>>;
  OR?: Maybe<Array<Maybe<UserScalarWhereWithAggregatesInput>>>;
  createdAt?: Maybe<DateTimeWithAggregatesFilter>;
  dateLastLogin?: Maybe<DateTimeWithAggregatesFilter>;
  email?: Maybe<StringWithAggregatesFilter>;
  fio?: Maybe<StringWithAggregatesFilter>;
  id?: Maybe<IntWithAggregatesFilter>;
  image?: Maybe<StringNullableWithAggregatesFilter>;
  isAdmin?: Maybe<BoolWithAggregatesFilter>;
  isBlocked?: Maybe<BoolWithAggregatesFilter>;
  password?: Maybe<StringWithAggregatesFilter>;
  passwordChangedTime?: Maybe<DateTimeWithAggregatesFilter>;
  rememberToken?: Maybe<StringNullableWithAggregatesFilter>;
  updatedAt?: Maybe<DateTimeWithAggregatesFilter>;
};

export type UserSumAggregateOutputType = {
  __typename?: 'UserSumAggregateOutputType';
  id?: Maybe<Scalars['Int']>;
};

export type UserSumOrderByAggregateInput = {
  id?: Maybe<SortOrder>;
};

export type UserUncheckedCreateInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  dateLastLogin?: Maybe<Scalars['DateTime']>;
  email: Scalars['String'];
  fio: Scalars['String'];
  id?: Maybe<Scalars['Int']>;
  image?: Maybe<Scalars['String']>;
  isAdmin?: Maybe<Scalars['Boolean']>;
  isBlocked?: Maybe<Scalars['Boolean']>;
  password: Scalars['String'];
  passwordChangedTime?: Maybe<Scalars['DateTime']>;
  rememberToken?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type UserUncheckedUpdateInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  dateLastLogin?: Maybe<DateTimeFieldUpdateOperationsInput>;
  email?: Maybe<StringFieldUpdateOperationsInput>;
  fio?: Maybe<StringFieldUpdateOperationsInput>;
  id?: Maybe<IntFieldUpdateOperationsInput>;
  image?: Maybe<NullableStringFieldUpdateOperationsInput>;
  isAdmin?: Maybe<BoolFieldUpdateOperationsInput>;
  isBlocked?: Maybe<BoolFieldUpdateOperationsInput>;
  password?: Maybe<StringFieldUpdateOperationsInput>;
  passwordChangedTime?: Maybe<DateTimeFieldUpdateOperationsInput>;
  rememberToken?: Maybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type UserUncheckedUpdateManyInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  dateLastLogin?: Maybe<DateTimeFieldUpdateOperationsInput>;
  email?: Maybe<StringFieldUpdateOperationsInput>;
  fio?: Maybe<StringFieldUpdateOperationsInput>;
  id?: Maybe<IntFieldUpdateOperationsInput>;
  image?: Maybe<NullableStringFieldUpdateOperationsInput>;
  isAdmin?: Maybe<BoolFieldUpdateOperationsInput>;
  isBlocked?: Maybe<BoolFieldUpdateOperationsInput>;
  password?: Maybe<StringFieldUpdateOperationsInput>;
  passwordChangedTime?: Maybe<DateTimeFieldUpdateOperationsInput>;
  rememberToken?: Maybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type UserUpdateInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  dateLastLogin?: Maybe<DateTimeFieldUpdateOperationsInput>;
  email?: Maybe<StringFieldUpdateOperationsInput>;
  fio?: Maybe<StringFieldUpdateOperationsInput>;
  image?: Maybe<NullableStringFieldUpdateOperationsInput>;
  isAdmin?: Maybe<BoolFieldUpdateOperationsInput>;
  isBlocked?: Maybe<BoolFieldUpdateOperationsInput>;
  password?: Maybe<StringFieldUpdateOperationsInput>;
  passwordChangedTime?: Maybe<DateTimeFieldUpdateOperationsInput>;
  rememberToken?: Maybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type UserUpdateManyMutationInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  dateLastLogin?: Maybe<DateTimeFieldUpdateOperationsInput>;
  email?: Maybe<StringFieldUpdateOperationsInput>;
  fio?: Maybe<StringFieldUpdateOperationsInput>;
  image?: Maybe<NullableStringFieldUpdateOperationsInput>;
  isAdmin?: Maybe<BoolFieldUpdateOperationsInput>;
  isBlocked?: Maybe<BoolFieldUpdateOperationsInput>;
  password?: Maybe<StringFieldUpdateOperationsInput>;
  passwordChangedTime?: Maybe<DateTimeFieldUpdateOperationsInput>;
  rememberToken?: Maybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type UserWhereInput = {
  AND?: Maybe<Array<Maybe<UserWhereInput>>>;
  NOT?: Maybe<Array<Maybe<UserWhereInput>>>;
  OR?: Maybe<Array<Maybe<UserWhereInput>>>;
  createdAt?: Maybe<DateTimeFilter>;
  dateLastLogin?: Maybe<DateTimeFilter>;
  email?: Maybe<StringFilter>;
  fio?: Maybe<StringFilter>;
  id?: Maybe<IntFilter>;
  image?: Maybe<StringNullableFilter>;
  isAdmin?: Maybe<BoolFilter>;
  isBlocked?: Maybe<BoolFilter>;
  password?: Maybe<StringFilter>;
  passwordChangedTime?: Maybe<DateTimeFilter>;
  rememberToken?: Maybe<StringNullableFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
};

export type UserWhereUniqueInput = {
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
};

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = { __typename?: 'Query', me?: { __typename?: 'User', id: number, email: string } | null | undefined };


export const MeDocument = gql`
    query me {
  me {
    id
    email
  }
}
    `;

/**
 * __useMeQuery__
 *
 * To run a query within a React component, call `useMeQuery` and pass it any options that fit your needs.
 * When your component renders, `useMeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMeQuery({
 *   variables: {
 *   },
 * });
 */
export function useMeQuery(baseOptions?: Apollo.QueryHookOptions<MeQuery, MeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MeQuery, MeQueryVariables>(MeDocument, options);
      }
export function useMeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MeQuery, MeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MeQuery, MeQueryVariables>(MeDocument, options);
        }
export type MeQueryHookResult = ReturnType<typeof useMeQuery>;
export type MeLazyQueryHookResult = ReturnType<typeof useMeLazyQuery>;
export type MeQueryResult = Apollo.QueryResult<MeQuery, MeQueryVariables>;